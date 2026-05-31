# API-Football setup (free tier)

Real live scores for Pirlo TV via [API-Football](https://www.api-football.com/).

## 1. Get a free API key

1. Go to https://www.api-football.com/
2. Sign up (free plan = **100 requests/day**)
3. Dashboard → copy your **API Key**

## 2. Add to `.env.local`

Create `e:\Cursor Projects\Pirlo TV\.env.local`:

```env
SPORTS_API_KEY=your_api_key_here
SPORTS_API_BASE_URL=https://v3.football.api-sports.io
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 3. Restart dev server

```powershell
cd "e:\Cursor Projects\Pirlo TV"
npm run dev
```

You should see a **green banner**: “Datos en vivo · API-Football”.

## What you get

| Data | Source |
|------|--------|
| Today's fixtures | API-Football `/fixtures?date=...` |
| Live scores & minutes | API-Football `/fixtures?live=all` |
| Leagues | LaLiga, Premier, Serie A, Bundesliga, Ligue 1, Champions, Libertadores, Liga MX, MLS, Brasileirão, World Cup |

Each match includes: teams, score, minute, status, league, venue, kickoff time.

## Free tier limits

- **100 requests/day** on free plan
- App caches data **20 minutes** (server) and refreshes live data every **~2 min** via `/api/matches`
- Stay within limits for normal traffic

## Vercel production

Add the same env vars in Vercel → Settings → Environment Variables → Redeploy.

## Fallback

If the API key is missing or the API fails, the site uses **demo data** from `src/lib/data/matches.ts`.
