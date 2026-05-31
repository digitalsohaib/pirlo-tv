export type SportType =
  | "futbol"
  | "f1"
  | "tenis"
  | "motogp"
  | "nba"
  | "ufc";

export type MatchStatus = "scheduled" | "live" | "finished" | "postponed";

export interface Team {
  id: string;
  name: string;
  slug: string;
  shortName: string;
  country: string;
  logo?: string;
}

export interface League {
  id: string;
  name: string;
  slug: string;
  country: string;
  sport: SportType;
  logo?: string;
}

export interface Match {
  id: string;
  slug: string;
  homeTeam: Team;
  awayTeam: Team;
  league: League;
  kickoff: string;
  status: MatchStatus;
  homeScore?: number;
  awayScore?: number;
  minute?: number;
  venue?: string;
  broadcasters: string[];
}

export interface StandingRow {
  position: number;
  team: Team;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export interface Channel {
  id: string;
  name: string;
  slug: string;
  description: string;
  countries: string[];
  sportsRights: string[];
  devices: string[];
  officialUrl: string;
}

export interface SearchResult {
  type: "match" | "team" | "league" | "channel";
  id: string;
  title: string;
  subtitle: string;
  href: string;
}
