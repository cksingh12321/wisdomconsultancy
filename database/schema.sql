-- Wisdom Consultancy — Turso (libSQL / SQLite) schema.
-- The backend will create this on first run, but you can also apply it
-- manually with:  turso db shell <db-name> < database/schema.sql

CREATE TABLE IF NOT EXISTS inquiries (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT    NOT NULL,
    company     TEXT,
    email       TEXT    NOT NULL,
    phone       TEXT,
    service     TEXT,
    message     TEXT    NOT NULL,
    user_agent  TEXT,
    created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at);
CREATE INDEX IF NOT EXISTS idx_inquiries_email      ON inquiries(email);
