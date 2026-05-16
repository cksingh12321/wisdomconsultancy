# Database — Turso (libSQL)

The schema in `schema.sql` is created automatically by the FastAPI backend on
first boot. You can also apply it by hand:

```bash
turso auth login
turso db create wisdom-consultancy
turso db shell wisdom-consultancy < database/schema.sql
turso db tokens create wisdom-consultancy
turso db show wisdom-consultancy --url
```

Take the **URL** and **auth token** and put them into HuggingFace Space secrets
as `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN`.
