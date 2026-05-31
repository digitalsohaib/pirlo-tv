import type { Match } from "@/types/sports";
import { slugify } from "@/lib/utils";
import { getTeamBySlug } from "./teams";
import { getLeagueBySlug } from "./leagues";

function buildMatch(
  homeSlug: string,
  awaySlug: string,
  leagueSlug: string,
  kickoff: string,
  status: Match["status"],
  opts?: Partial<Pick<Match, "homeScore" | "awayScore" | "minute" | "broadcasters">>
): Match {
  const home = getTeamBySlug(homeSlug)!;
  const away = getTeamBySlug(awaySlug)!;
  const league = getLeagueBySlug(leagueSlug)!;
  const slug = `${home.slug}-vs-${away.slug}`;
  return {
    id: slug,
    slug,
    homeTeam: home,
    awayTeam: away,
    league,
    kickoff,
    status,
    venue: "Por confirmar",
    broadcasters: opts?.broadcasters ?? ["ESPN", "Movistar Deportes"],
    ...opts,
  };
}

const today = new Date();
const atHour = (h: number, m = 0) => {
  const d = new Date(today);
  d.setHours(h, m, 0, 0);
  return d.toISOString();
};

export const matches: Match[] = [
  buildMatch("crystal-palace", "arsenal", "premier-league", atHour(14), "live", {
    homeScore: 1,
    awayScore: 2,
    minute: 67,
    broadcasters: ["Sky Sports", "TNT Sports"],
  }),
  buildMatch("manchester-city", "aston-villa", "premier-league", atHour(14), "live", {
    homeScore: 2,
    awayScore: 1,
    minute: 72,
    broadcasters: ["Sky Sports"],
  }),
  buildMatch("liverpool", "chelsea", "premier-league", atHour(16, 30), "scheduled", {
    broadcasters: ["TNT Sports", "DAZN"],
  }),
  buildMatch("real-madrid", "fc-barcelona", "laliga", atHour(21), "scheduled", {
    broadcasters: ["Movistar LaLiga", "ESPN"],
  }),
  buildMatch("atletico-de-madrid", "fc-barcelona", "laliga", atHour(19), "scheduled"),
  buildMatch("boca-juniors", "river-plate", "copa-libertadores", atHour(22), "scheduled", {
    broadcasters: ["ESPN", "Fox Sports"],
  }),
  buildMatch("napoli", "inter-de-milan", "serie-a", atHour(20, 45), "scheduled"),
  buildMatch("america", "chivas", "liga-mx", atHour(23), "scheduled", {
    broadcasters: ["TUDN", "Fox Sports"],
  }),
  buildMatch("sporting-cristal", "america", "liga-mx", atHour(18), "finished", {
    homeScore: 2,
    awayScore: 2,
    broadcasters: ["Liga 1 Max"],
  }),
  buildMatch("bayern-munich", "psg", "champions-league", atHour(21), "scheduled", {
    broadcasters: ["Movistar+", "DAZN"],
  }),
];

export function getMatchBySlug(slug: string): Match | undefined {
  return matches.find((m) => m.slug === slug);
}

export function getTodayMatches(): Match[] {
  return matches;
}

export function getLiveMatches(): Match[] {
  return matches.filter((m) => m.status === "live");
}

export function getMatchesByLeague(leagueSlug: string): Match[] {
  return matches.filter((m) => m.league.slug === leagueSlug);
}

export function getMatchesByTeam(teamSlug: string): Match[] {
  return matches.filter(
    (m) => m.homeTeam.slug === teamSlug || m.awayTeam.slug === teamSlug
  );
}

export function getAllMatchSlugs(): string[] {
  return matches.map((m) => m.slug);
}

export function createMatchSlug(home: string, away: string): string {
  return `${slugify(home)}-vs-${slugify(away)}`;
}
