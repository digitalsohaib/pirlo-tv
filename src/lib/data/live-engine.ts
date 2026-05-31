import type { Match } from "@/types/sports";
import { getDataSourceMode } from "./source";
import { matches as baseMatches } from "./matches";

/** Simulates live progression for demo mode only */
export function getMatchesWithLiveSimulation(): Match[] {
  if (getDataSourceMode() === "api") {
    return baseMatches;
  }

  const now = Date.now();

  return baseMatches.map((m) => {
    if (m.status !== "live") return { ...m };

    const seed = m.id.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    const elapsed = Math.floor((now / 60000 + seed) % 90) + 1;
    const homeScore = (m.homeScore ?? 0) + (elapsed % 17 === 0 ? 1 : 0);
    const awayScore = (m.awayScore ?? 0) + (elapsed % 23 === 0 ? 1 : 0);

    return {
      ...m,
      minute: Math.min(elapsed, 90),
      homeScore,
      awayScore,
    };
  });
}

export function getLiveCount(matches: Match[]) {
  return matches.filter((m) => m.status === "live").length;
}
