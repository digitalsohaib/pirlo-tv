import type { Match, MatchStatus, Team, League } from "@/types/sports";
import { slugify } from "@/lib/utils";
import type { ApiFootballFixture } from "./football-client";

const LEAGUE_SLUGS: Record<number, string> = {
  1: "world-cup",
  2: "champions-league",
  3: "europa-league",
  13: "copa-libertadores",
  39: "premier-league",
  61: "ligue-1",
  71: "brasileirao",
  78: "bundesliga",
  135: "serie-a",
  140: "laliga",
  262: "liga-mx",
  253: "mls",
};

function mapStatus(short: string): MatchStatus {
  if (["1H", "2H", "HT", "ET", "BT", "P", "LIVE", "INT"].includes(short)) {
    return "live";
  }
  if (["FT", "AET", "PEN"].includes(short)) {
    return "finished";
  }
  if (["PST", "CANC", "ABD", "SUSP", "AWD", "WO"].includes(short)) {
    return "postponed";
  }
  return "scheduled";
}

function shortName(name: string): string {
  const clean = name.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
  return clean.slice(0, 3) || name.slice(0, 3).toUpperCase();
}

function toTeam(side: { id: number; name: string; logo?: string }): Team {
  const slug = slugify(side.name);
  return {
    id: String(side.id),
    name: side.name,
    slug,
    shortName: shortName(side.name),
    country: "",
    logo: side.logo,
  };
}

function toLeague(league: ApiFootballFixture["league"]): League {
  const slug = LEAGUE_SLUGS[league.id] ?? slugify(league.name);
  return {
    id: String(league.id),
    name: league.name,
    slug,
    country: league.country,
    sport: "futbol",
    logo: league.logo,
  };
}

export function transformFixture(fixture: ApiFootballFixture): Match {
  const home = toTeam(fixture.teams.home);
  const away = toTeam(fixture.teams.away);
  const slug = `${home.slug}-vs-${away.slug}`;
  const status = mapStatus(fixture.fixture.status.short);

  return {
    id: String(fixture.fixture.id),
    slug,
    homeTeam: home,
    awayTeam: away,
    league: toLeague(fixture.league),
    kickoff: fixture.fixture.date,
    status,
    homeScore: fixture.goals.home ?? undefined,
    awayScore: fixture.goals.away ?? undefined,
    minute: fixture.fixture.status.elapsed ?? undefined,
    venue: fixture.fixture.venue?.name ?? undefined,
    broadcasters: ["Consultar emisora local"],
  };
}

export function transformFixtures(fixtures: ApiFootballFixture[]): Match[] {
  return fixtures.map(transformFixture);
}
