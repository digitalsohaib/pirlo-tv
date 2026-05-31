/** API-Football league IDs we show (free tier — one request covers all via date filter). */
export const TOP_LEAGUE_IDS = new Set([
  1, // World Cup
  2, // Champions League
  3, // Europa League
  13, // Copa Libertadores
  39, // Premier League
  61, // Ligue 1
  71, // Brasileirão
  78, // Bundesliga
  135, // Serie A
  140, // LaLiga
  262, // Liga MX
  253, // MLS
]);

export type ApiFootballFixture = {
  fixture: {
    id: number;
    date: string;
    status: {
      short: string;
      long: string;
      elapsed: number | null;
    };
    venue?: { name?: string | null };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo?: string;
  };
  teams: {
    home: { id: number; name: string; logo?: string };
    away: { id: number; name: string; logo?: string };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
};

type ApiResponse = {
  response: ApiFootballFixture[];
  errors?: Record<string, string>;
};

const BASE_URL =
  process.env.SPORTS_API_BASE_URL ?? "https://v3.football.api-sports.io";

function getApiKey(): string | undefined {
  return process.env.SPORTS_API_KEY;
}

export function isApiConfigured(): boolean {
  return Boolean(getApiKey());
}

async function apiFetch<T>(path: string): Promise<T> {
  const key = getApiKey();
  if (!key) throw new Error("SPORTS_API_KEY not configured");

  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "x-apisports-key": key,
    },
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error(`API-Football HTTP ${res.status}`);
  }

  const data = (await res.json()) as T & { errors?: Record<string, string> };
  if (data.errors && Object.keys(data.errors).length > 0) {
    const msg = Object.values(data.errors).join("; ");
    throw new Error(msg || "API-Football error");
  }

  return data;
}

function todayDateString(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Today's fixtures — single API call, filtered to top leagues. */
export async function fetchTodayFixtures(): Promise<ApiFootballFixture[]> {
  const date = todayDateString();
  const data = await apiFetch<ApiResponse>(
    `/fixtures?date=${date}&timezone=Europe/Madrid`
  );

  return (data.response ?? []).filter((f) => TOP_LEAGUE_IDS.has(f.league.id));
}

/** Live fixtures — merged on top of today's list for fresher minutes/scores. */
export async function fetchLiveFixtures(): Promise<ApiFootballFixture[]> {
  const data = await apiFetch<ApiResponse>("/fixtures?live=all");
  return (data.response ?? []).filter((f) => TOP_LEAGUE_IDS.has(f.league.id));
}

export async function fetchAllTodayMatches(): Promise<ApiFootballFixture[]> {
  const [today, live] = await Promise.all([
    fetchTodayFixtures(),
    fetchLiveFixtures(),
  ]);

  const byId = new Map<number, ApiFootballFixture>();
  for (const f of today) byId.set(f.fixture.id, f);
  for (const f of live) byId.set(f.fixture.id, f);

  return Array.from(byId.values()).sort(
    (a, b) =>
      new Date(a.fixture.date).getTime() - new Date(b.fixture.date).getTime()
  );
}
