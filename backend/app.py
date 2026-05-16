"""
Wisdom Consultancy — FastAPI backend.

Hosted on HuggingFace Spaces (Docker SDK, free tier).
Persists contact-form submissions to a Turso (libSQL) database.

Required environment variables (set as HF Space Secrets):
    TURSO_DATABASE_URL   e.g. libsql://your-db.turso.io
    TURSO_AUTH_TOKEN     auth token from `turso db tokens create`
    ALLOWED_ORIGIN       optional, e.g. https://wisdomconsultancy.vercel.app
"""

import os
import re
from datetime import datetime
from typing import Optional

import libsql_client
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

APP_VERSION = "1.0.1"

# ----- Config -----
TURSO_URL = os.environ.get("TURSO_DATABASE_URL", "").strip()
TURSO_TOKEN = os.environ.get("TURSO_AUTH_TOKEN", "").strip()
ALLOWED_ORIGIN = os.environ.get("ALLOWED_ORIGIN", "*")

# ----- App -----
app = FastAPI(
    title="Wisdom Consultancy API",
    version=APP_VERSION,
    description="Backend for wisdomconsultancy.org — handles contact-form submissions."
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in ALLOWED_ORIGIN.split(",")] if ALLOWED_ORIGIN != "*" else ["*"],
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


# ----- Models -----
class ContactPayload(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    company: Optional[str] = Field(default="", max_length=160)
    email: EmailStr
    phone: Optional[str] = Field(default="", max_length=40)
    service: Optional[str] = Field(default="", max_length=120)
    message: str = Field(min_length=5, max_length=4000)


# ----- DB helper -----
def _client():
    if not TURSO_URL or not TURSO_TOKEN:
        raise HTTPException(
            status_code=500,
            detail="Database is not configured. Set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN."
        )
    return libsql_client.create_client_sync(url=TURSO_URL, auth_token=TURSO_TOKEN)


def ensure_schema():
    """Create the inquiries table on first run."""
    try:
        with _client() as c:
            c.execute(
                """
                CREATE TABLE IF NOT EXISTS inquiries (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    company TEXT,
                    email TEXT NOT NULL,
                    phone TEXT,
                    service TEXT,
                    message TEXT NOT NULL,
                    user_agent TEXT,
                    created_at TEXT NOT NULL DEFAULT (datetime('now'))
                );
                """
            )
            c.execute(
                "CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at);"
            )
    except Exception as exc:  # noqa: BLE001
        # We don't want a missing DB to crash the boot — surface it via /health.
        print(f"[wisdom] schema init failed: {exc}")


@app.on_event("startup")
def _startup():
    if TURSO_URL and TURSO_TOKEN:
        ensure_schema()


# ----- Routes -----
@app.get("/")
def root():
    return {
        "service": "wisdom-consultancy-api",
        "version": APP_VERSION,
        "endpoints": ["/health", "/contact"],
    }


@app.get("/health")
def health():
    db_ok = False
    err = None
    if TURSO_URL and TURSO_TOKEN:
        try:
            with _client() as c:
                c.execute("SELECT 1;")
            db_ok = True
        except Exception as exc:  # noqa: BLE001
            err = str(exc)
    return {"status": "ok", "db": db_ok, "db_error": err}


_phone_re = re.compile(r"[^\d+\-\s()]")


@app.post("/contact")
def submit_contact(payload: ContactPayload):
    # Light defensive cleaning — Pydantic already enforces shape & length.
    phone = (payload.phone or "").strip()
    if phone and _phone_re.search(phone):
        raise HTTPException(status_code=400, detail="Invalid characters in phone number.")

    try:
        with _client() as c:
            c.execute(
                """
                INSERT INTO inquiries (name, company, email, phone, service, message, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?);
                """,
                [
                    payload.name.strip(),
                    (payload.company or "").strip(),
                    str(payload.email).strip().lower(),
                    phone,
                    (payload.service or "").strip(),
                    payload.message.strip(),
                    datetime.utcnow().isoformat(timespec="seconds") + "Z",
                ],
            )
    except HTTPException:
        raise
    except Exception as exc:  # noqa: BLE001
        # Don't leak DB details to the public.
        print(f"[wisdom] insert failed: {exc}")
        raise HTTPException(status_code=500, detail="Could not save your enquiry. Please email us directly.")

    return {"ok": True, "message": "Enquiry received."}
