# Wisdom Consultancy — Frontend (Next.js)

Marketing site for **Wisdom Business & Legal Consultancy** — deployed to Vercel.

## Run locally

```bash
cp .env.example .env.local
# set NEXT_PUBLIC_API_URL to your HuggingFace Space URL
npm install
npm run dev
```

Open <http://localhost:3000>.

## Pages

| Route                       | Purpose                                  |
| --------------------------- | ---------------------------------------- |
| `/`                         | Home                                     |
| `/about`                    | About the firm                           |
| `/services`                 | All 9 practice areas                     |
| `/services/[slug]`          | Individual service detail (static)       |
| `/sectors`                  | KASEZ, Mundra, Tuna Port, tribunals      |
| `/contact`                  | Contact info + working enquiry form      |
| `/api/contact`              | Server-side proxy → FastAPI backend      |

## Deploy

Push the repo to GitHub, then "Import Project" on Vercel with the
`frontend/` directory as the project root. Set `NEXT_PUBLIC_API_URL` in
Vercel project settings.
