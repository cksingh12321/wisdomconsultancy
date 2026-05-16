---
title: Wisdom Consultancy API
emoji: ⚓
colorFrom: indigo
colorTo: yellow
sdk: docker
app_port: 7860
pinned: false
license: mit
---

# Wisdom Consultancy — Backend API

FastAPI service that receives contact-form submissions from the Vercel-hosted
frontend and persists them to a Turso (libSQL) database.

## Endpoints

| Method | Path       | Purpose                            |
| ------ | ---------- | ---------------------------------- |
| `GET`  | `/`        | Service info                       |
| `GET`  | `/health`  | Liveness + DB ping                 |
| `POST` | `/contact` | Save a contact-form submission     |

## Environment variables

Configure these as **Secrets** in your HuggingFace Space:

- `TURSO_DATABASE_URL` — `libsql://your-db.turso.io`
- `TURSO_AUTH_TOKEN`   — from `turso db tokens create your-db`
- `ALLOWED_ORIGIN`     — e.g. `https://wisdomconsultancy.vercel.app` (optional, defaults to `*`)

## Local run

```bash
pip install -r requirements.txt
export TURSO_DATABASE_URL=libsql://...
export TURSO_AUTH_TOKEN=...
uvicorn app:app --reload --port 7860
```

## Deploy

This Space uses the **Docker SDK** — pushing to the Space repo on HuggingFace
will trigger a rebuild from the `Dockerfile`.
