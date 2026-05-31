# Análisis de competidores — Pirlo TV

## Sitios analizados

| Dominio | Enfoque principal | Debilidades |
|---------|-------------------|-------------|
| pirlotv.online | KW "rojadirecta", "fútbol en vivo", programación mínima | Contenido muy fino, UX básica, riesgo legal |
| pirlotv3.pl | Lista de partidos + enlaces "Canal 1…N" (streaming) | Sin análisis, sin SEO profundo, PHP legacy |
| pirlotvhd.su | Long-form SEO en español, canales, FAQs, F1/tenis | Promueve streaming ilegal, mala reputación AdSense |

## Patrones SEO que copiamos (versión legal)

1. **"Programación de hoy"** — cubierto en `/schedule/hoy` y `/partidos-hoy`
2. **Clusters de KW secundarios** — `/deportes/formula-1`, `/alternativas`, etc.
3. **Páginas de canales** — `/channel/[slug]` con info oficial, no "Mira ahora" pirata
4. **Contenido largo + FAQ schema** — homepage, match y channel pages
5. **Enlaces internos** — footer, breadcrumbs, related teams/leagues

## Ventajas de pirlotvfutbol.com

- UI premium dark red/black (glassmorphism, live ticker)
- Core Web Vitals (Next.js SSG, Image, lazy)
- Datos estructurados: SportsEvent, FAQ, Breadcrumb
- Escalable: rutas dinámicas + Prisma
- Cumplimiento: sin reproductores ni "canales HD" clandestinos

## Mapa de intención de búsqueda

| Keyword | Página objetivo |
|---------|-----------------|
| pirlo tv | `/` |
| pirlo tv fútbol en vivo | `/partidos-hoy`, `/resultados` |
| pirlo tv online | `/` |
| pirlo tv alternativas | `/alternativas` |
| roja directa pirlo tv | `/alternativas` |
| pirlo tv f1 | `/deportes/formula-1` |
| pirlo tv motogp | `/deportes/motogp` |
| pirlo tv tenis | `/deportes/tenis` |
| pirlo tv basket | `/deportes/nba` |
| ver pirlo tv | `/` |
| pirlo tv gratis | Contenido legal en homepage FAQ |
