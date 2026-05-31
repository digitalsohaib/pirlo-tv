/**
 * WHERE MATCH DATA COMES FROM
 * ----------------------------
 * Right now: local demo data in `matches.ts` (hand-written fixtures for UI/dev).
 *
 * Production: connect a licensed sports API, cache in PostgreSQL (Prisma), serve via `/api/*`.
 *
 * Recommended APIs:
 * - API-Football (api-football.com) — fixtures, live scores, standings
 * - Sportradar, Opta — enterprise
 * - football-data.org — limited free tier
 */

export type DataSourceMode = "demo" | "api";

export function getDataSourceMode(): DataSourceMode {
  if (process.env.SPORTS_API_KEY && process.env.SPORTS_API_BASE_URL) {
    return "api";
  }
  return "demo";
}

export function getDataSourceLabel(): { mode: DataSourceMode; label: string; hint: string } {
  const mode = getDataSourceMode();
  if (mode === "api") {
    return {
      mode,
      label: "Datos en vivo · API-Football",
      hint: "Marcadores reales vía API-Football (plan gratuito). Se actualizan cada ~2 min.",
    };
  }
  return {
    mode: "demo",
    label: "Datos de demostración",
    hint: "Partidos de ejemplo en src/lib/data/matches.ts — añade SPORTS_API_KEY para datos reales",
  };
}
