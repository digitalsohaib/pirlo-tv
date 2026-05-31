import type { League, StandingRow } from "@/types/sports";
import { teams, getTeamBySlug } from "./teams";

export const leagues: League[] = [
  {
    id: "laliga",
    name: "LaLiga EA Sports",
    slug: "laliga",
    country: "España",
    sport: "futbol",
  },
  {
    id: "premier-league",
    name: "Premier League",
    slug: "premier-league",
    country: "Inglaterra",
    sport: "futbol",
  },
  {
    id: "champions-league",
    name: "UEFA Champions League",
    slug: "champions-league",
    country: "Europa",
    sport: "futbol",
  },
  {
    id: "copa-libertadores",
    name: "Copa Libertadores",
    slug: "copa-libertadores",
    country: "Sudamérica",
    sport: "futbol",
  },
  {
    id: "serie-a",
    name: "Serie A",
    slug: "serie-a",
    country: "Italia",
    sport: "futbol",
  },
  {
    id: "liga-mx",
    name: "Liga MX",
    slug: "liga-mx",
    country: "México",
    sport: "futbol",
  },
  {
    id: "formula-1",
    name: "Formula 1",
    slug: "formula-1",
    country: "Internacional",
    sport: "f1",
  },
  {
    id: "motogp",
    name: "MotoGP",
    slug: "motogp",
    country: "Internacional",
    sport: "motogp",
  },
  {
    id: "atp",
    name: "ATP Tour",
    slug: "atp",
    country: "Internacional",
    sport: "tenis",
  },
  {
    id: "nba",
    name: "NBA",
    slug: "nba",
    country: "Estados Unidos",
    sport: "nba",
  },
];

export function getLeagueBySlug(slug: string): League | undefined {
  return leagues.find((l) => l.slug === slug);
}

export function getStandingsForLeague(slug: string): StandingRow[] {
  const mapping: Record<string, string[]> = {
    laliga: ["real-madrid", "fc-barcelona", "atletico-de-madrid"],
    "premier-league": [
      "manchester-city",
      "arsenal",
      "liverpool",
      "chelsea",
    ],
    "champions-league": ["real-madrid", "bayern-munich", "psg", "inter-de-milan"],
    "serie-a": ["inter-de-milan", "napoli"],
    "liga-mx": ["america", "chivas"],
  };

  const slugs = mapping[slug] ?? ["real-madrid", "fc-barcelona", "manchester-city"];
  return slugs.map((teamSlug, i) => {
    const t = getTeamBySlug(teamSlug) ?? teams[0];
    const played = 24 - i;
    const won = Math.max(8, 18 - i * 2);
    const drawn = 4;
    const lost = played - won - drawn;
    const gf = 40 - i * 3;
    const ga = 15 + i * 2;
    return {
      position: i + 1,
      team: t,
      played,
      won,
      drawn,
      lost,
      goalsFor: gf,
      goalsAgainst: ga,
      points: won * 3 + drawn,
    };
  });
}
