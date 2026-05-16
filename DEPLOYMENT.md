# Deployment Guide

Follow the steps in order. The whole stack runs on free tiers.

---

## 0 · Prerequisites

You'll need accounts at:
- [GitHub](https://github.com)
- [Turso](https://turso.tech) (database)
- [HuggingFace](https://huggingface.co) (backend)
- [Vercel](https://vercel.com) (frontend)

And `git`, `node ≥ 18`, and the `turso` CLI installed locally:

```bash
# turso CLI
curl -sSfL https://get.tur.so/install.sh | bash
```

---

## 1 · Push the code to GitHub

From the repo root (`wisdomconsultancy/`):

```bash
git init
git add .
git commit -m "Initial commit: Wisdom Consultancy website"
git branch -M main
```

Then create a new repo on GitHub (web UI → "New repository", named e.g. `wisdomconsultancy`, **without** a README/license — we already have those).

```bash
git remote add origin https://github.com/<your-username>/wisdomconsultancy.git
git push -u origin main
```

> If you use SSH instead of HTTPS: `git remote add origin git@github.com:<your-username>/wisdomconsultancy.git`

---

## 2 · Create the Turso database

```bash
turso auth login
turso db create wisdom-consultancy
turso db shell wisdom-consultancy < database/schema.sql   # optional — backend creates it too
turso db show wisdom-consultancy --url                    # copy the libsql:// URL
turso db tokens create wisdom-consultancy                 # copy the auth token
```

Keep the URL and token handy for the next step.

---

## 3 · Deploy the backend to HuggingFace Spaces

1. Go to <https://huggingface.co/new-space>.
2. **Owner:** your username · **Space name:** `wisdom-backend` · **License:** MIT · **SDK:** **Docker** · **Hardware:** *CPU basic — free*.
3. Create the Space. You'll get a repo URL like `https://huggingface.co/spaces/<you>/wisdom-backend`.
4. Push **only the contents of `backend/`** into the Space repo:

   ```bash
   # Clone the empty Space
   git clone https://huggingface.co/spaces/<you>/wisdom-backend hf-space
   cd hf-space

   # Copy backend files in
   cp -R ../wisdomconsultancy/backend/. .
   git add .
   git commit -m "Initial backend deploy"
   git push
   ```

   > HuggingFace will ask for a token — use a [User Access Token](https://huggingface.co/settings/tokens) with **write** scope.

5. In the Space → **Settings → Variables and secrets**, add:
   - `TURSO_DATABASE_URL` = the `libsql://…` URL from step 2
   - `TURSO_AUTH_TOKEN`   = the token from step 2
   - `ALLOWED_ORIGIN`     = `https://<your-vercel-project>.vercel.app` (set this after step 4 — or temporarily `*` for testing)

6. The Space will build and start. Test it:
   ```bash
   curl https://<you>-wisdom-backend.hf.space/health
   # {"status":"ok","db":true,"db_error":null}
   ```

The public URL of the Space (e.g. `https://<you>-wisdom-backend.hf.space`) is what you'll plug into Vercel.

---

## 4 · Deploy the frontend to Vercel

1. Go to <https://vercel.com/new> → **Import Git Repository** → select the GitHub repo you pushed in step 1.
2. On the import screen:
   - **Root Directory:** click *Edit* and choose `frontend`.
   - **Framework Preset:** Vercel will detect **Next.js** automatically.
3. **Environment Variables** — add:
   - `NEXT_PUBLIC_API_URL` = `https://<you>-wisdom-backend.hf.space`
4. Click **Deploy**. Vercel will give you a URL like `https://wisdomconsultancy.vercel.app`.

5. Go back to HuggingFace Space → Settings → Secrets and set:
   - `ALLOWED_ORIGIN` = `https://wisdomconsultancy.vercel.app` (replace `*` from earlier)

6. (Optional) Add your custom domain in Vercel → Settings → Domains and point `wisdomconsultancy.org` at it.

---

## 5 · Smoke test the live stack

```bash
# 1. Backend health
curl https://<you>-wisdom-backend.hf.space/health

# 2. Submit a test enquiry through the frontend
#    Visit /contact on the live Vercel URL and submit the form.

# 3. Read it back from Turso
turso db shell wisdom-consultancy "SELECT id, name, email, service, created_at FROM inquiries ORDER BY id DESC LIMIT 5;"
```

If all three work, you're live.

---

## Future updates

- Frontend changes → `git push` to GitHub `main` → Vercel auto-deploys.
- Backend changes → `git push` inside the `hf-space/` clone → HuggingFace rebuilds.
- DB schema changes → edit `database/schema.sql` and apply with `turso db shell`.

---

## Costs

Everything in this guide stays inside the providers' free tiers as of 2026:

- **Vercel Hobby:** 100 GB bandwidth / mo, unlimited deployments.
- **HuggingFace Spaces (CPU basic):** free; sleeps when idle, wakes on first request (cold start ~10s).
- **Turso Free:** 500 databases, 9 GB total storage, 1B row reads / mo.
- **GitHub Free:** unlimited public/private repos.
