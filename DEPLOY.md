# Deploy Pirlo TV to GitHub + Vercel

## Already done locally
- Git repo initialized
- First commit created
- API key saved in `.env.local` (not in git)

---

## Step 1 — Push to GitHub (one-time login)

Open PowerShell in the project folder:

```powershell
cd "e:\Cursor Projects\Pirlo TV"
gh auth login
```

Choose: **GitHub.com → HTTPS → Login with browser**

Then create repo and push:

```powershell
git branch -M main
gh repo create pirlo-tv --public --source=. --remote=origin --push
```

If repo name is taken, use: `gh repo create pirlotvfutbol --public --source=. --remote=origin --push`

---

## Step 2 — Deploy on Vercel

```powershell
npm i -g vercel
vercel login
vercel link
vercel env add SPORTS_API_KEY production
# paste: 67a0c38783109c836b1ef14cbd0db6f0

vercel env add SPORTS_API_BASE_URL production
# paste: https://v3.football.api-sports.io

vercel env add NEXT_PUBLIC_SITE_URL production
# paste: https://pirlotvfutbol.com

vercel --prod
```

**Or use Vercel website:** Import GitHub repo → Settings → Environment Variables:

| Name | Value |
|------|--------|
| `SPORTS_API_KEY` | `67a0c38783109c836b1ef14cbd0db6f0` |
| `SPORTS_API_BASE_URL` | `https://v3.football.api-sports.io` |
| `NEXT_PUBLIC_SITE_URL` | `https://pirlotvfutbol.com` |

---

## Step 3 — Connect domain

1. Buy **pirlotvfutbol.com**
2. Vercel → Project → **Domains** → add domain
3. Update DNS at your registrar (Vercel shows exact records)

---

## API key note

Your API-Football key uses header `x-apisports-key` — the app maps this from `SPORTS_API_KEY` automatically. The base URL `v3.football.api-sports.io` is correct.

Regenerate the key at [api-football.com](https://www.api-football.com/) if it was shared publicly.
