# Where match data comes from

## Current setup (demo)

| What | Location |
|------|----------|
| Teams | `src/lib/data/teams.ts` |
| Leagues | `src/lib/data/leagues.ts` |
| Matches & scores | `src/lib/data/matches.ts` |
| Live tick simulation | `src/lib/data/live-engine.ts` |

The UI shows an **amber banner**: “Datos de demostración”.  
Live matches get a **simulated** minute counter and occasional score changes so you can test the UX before paying for an API.

---

## Production setup (real data)

1. Sign up for a sports API (e.g. [API-Football](https://www.api-football.com/)).
2. Add to `.env.local`:

```env
SPORTS_API_KEY=your_key
SPORTS_API_BASE_URL=https://v3.football.api-sports.io
DATABASE_URL=postgresql://...
```

3. Create a sync script or cron job that:
   - Fetches fixtures / live scores from the API
   - Saves them in PostgreSQL via Prisma (`prisma/schema.prisma`)
4. Update `src/app/api/matches/route.ts` to read from the database instead of `matches.ts`.

The banner will switch to green: **“Datos en vivo · API deportiva”**.

---

## Data flow (target architecture)

```text
Sports API  →  Cron / API route  →  PostgreSQL (Prisma)  →  /api/matches  →  MatchesPanel (UI)
```

---

## Why not scrape Pirlo TV competitors?

Competitor sites use illegal stream links and scraped schedules. This project uses **licensed or demo data** only — safe for AdSense and long-term SEO.
