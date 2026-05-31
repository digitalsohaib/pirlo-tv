# Pirlo TV Sports Hub 2026

Plataforma de inteligencia deportiva en **español** para [pirlotvfutbol.com](https://pirlotvfutbol.com).  
Marcadores, calendarios, análisis y canales **oficiales** — sin streaming pirata.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + Framer Motion
- Prisma + PostgreSQL (Supabase)
- API Routes para búsqueda y marcadores en vivo

## Desarrollo

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
npm start
```

Despliegue recomendado: **Vercel** + **Cloudflare** (DNS, CDN, WAF).

## Estructura SEO

| Ruta | Descripción |
|------|-------------|
| `/` | Homepage con partidos, ligas, Mundial 2026 |
| `/match/[slug]` | Previas programáticas |
| `/team/[slug]` | Fichas de equipos |
| `/league/[slug]` | Ligas con clasificación |
| `/channel/[slug]` | Canales legales |
| `/schedule/hoy` | Programación filtrable |
| `/alternativas` | KW "pirlo tv alternativas" |
| `/deportes/*` | F1, MotoGP, tenis, NBA, UFC |

## API deportiva

Los datos actuales son **mock** en `src/lib/data/`. Conecta una API real:

1. Añade `SPORTS_API_KEY` en `.env.local`
2. Sincroniza en cron/API route hacia Prisma
3. Sustituye imports en páginas por consultas DB

## Análisis competidores

Ver `COMPETITOR_ANALYSIS.md`.

## Legal

Este proyecto es **AdSense-safe**: no incluye embeds ni enlaces a transmisiones no autorizadas.
