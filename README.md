# Wisdom Consultancy — Website Monorepo

Full-stack website for **Wisdom Business & Legal Consultancy** (wisdomconsultancy.org), built to run entirely on free tiers:

| Layer     | Stack                       | Hosting                |
| --------- | --------------------------- | ---------------------- |
| Frontend  | Next.js 14 (Pages router)   | Vercel (free)          |
| Backend   | FastAPI + Uvicorn (Docker)  | HuggingFace Spaces (free) |
| Database  | libSQL / SQLite             | Turso (free)           |
| Source    | Git                         | GitHub                 |

## Repository layout

```
wisdomconsultancy/
├── frontend/      # Next.js site (Home, About, Services, /services/[slug], Sectors, Contact)
│   ├── pages/
│   ├── components/
│   ├── data/services.js
│   ├── styles/globals.css
│   └── package.json
├── backend/       # FastAPI app for HuggingFace Spaces
│   ├── app.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── README.md  # HF Space card metadata
├── database/
│   └── schema.sql # Turso/libSQL schema (auto-created on backend boot)
├── DEPLOYMENT.md  # Step-by-step deploy guide
└── README.md
```

## Quick start (local)

```bash
# 1. Backend — terminal A
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env  # fill in Turso URL + token
export $(cat .env | xargs)
uvicorn app:app --reload --port 7860

# 2. Frontend — terminal B
cd frontend
cp .env.example .env.local  # NEXT_PUBLIC_API_URL=http://localhost:7860
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploy

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** — covers the full GitHub → Turso → HuggingFace → Vercel flow.

## License

MIT. See `LICENSE`.
