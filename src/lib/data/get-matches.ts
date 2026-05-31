import type { Match } from "@/types/sports";
import { fetchAllTodayMatches, isApiConfigured } from "@/lib/api/football-client";
import { transformFixtures } from "@/lib/api/transform-fixture";
import {
  matches as demoMatches,
  getTodayMatches as demoToday,
  getMatchBySlug as demoBySlug,
  getMatchesByLeague as demoByLeague,
  getMatchesByTeam as demoByTeam,
  getAllMatchSlugs as demoAllSlugs,
} from "./matches";
import { getDataSourceMode } from "./source";

/** 20 min cache — stays within API-Football free tier (~72 req/day). */
const CACHE_MS = 20 * 60 * 1000;

let cache: { matches: Match[]; at: number } | null = null;

async function fetchFromApi(): Promise<Match[]> {
  const fixtures = await fetchAllTodayMatches();
  const matches = transformFixtures(fixtures);
  return matches.length > 0 ? matches : demoToday();
}

async function getCachedMatches(): Promise<Match[]> {
  if (!isApiConfigured()) return demoToday();

  const now = Date.now();
  if (cache && now - cache.at < CACHE_MS) {
    return cache.matches;
  }

  try {
    const matches = await fetchFromApi();
    cache = { matches, at: now };
    return matches;
  } catch (err) {
    console.error("[get-matches] API fallback to demo:", err);
    return demoToday();
  }
}

export async function getTodayMatches(): Promise<Match[]> {
  if (getDataSourceMode() === "demo") return demoToday();
  return getCachedMatches();
}

export async function getLiveMatches(): Promise<Match[]> {
  const all = await getTodayMatches();
  return all.filter((m) => m.status === "live");
}

export async function getMatchBySlug(slug: string): Promise<Match | undefined> {
  const all = await getTodayMatches();
  const found = all.find((m) => m.slug === slug);
  if (found) return found;
  return demoBySlug(slug);
}

export async function getMatchesByLeague(leagueSlug: string): Promise<Match[]> {
  const all = await getTodayMatches();
  const fromApi = all.filter((m) => m.league.slug === leagueSlug);
  if (fromApi.length > 0) return fromApi;
  return demoByLeague(leagueSlug);
}

export async function getMatchesByTeam(teamSlug: string): Promise<Match[]> {
  const all = await getTodayMatches();
  const fromApi = all.filter(
    (m) => m.homeTeam.slug === teamSlug || m.awayTeam.slug === teamSlug
  );
  if (fromApi.length > 0) return fromApi;
  return demoByTeam(teamSlug);
}

export async function getAllMatchSlugs(): Promise<string[]> {
  const all = await getTodayMatches();
  const slugs = new Set(all.map((m) => m.slug));
  demoAllSlugs().forEach((s) => slugs.add(s));
  return Array.from(slugs);
}

/** For API routes — refreshes cache when stale > 2 min. */
export async function getMatchesForApi(force = false): Promise<Match[]> {
  if (getDataSourceMode() === "demo") return demoMatches;

  const now = Date.now();
  const stale = !cache || now - cache.at > 2 * 60 * 1000;

  if (force || stale) {
    try {
      const matches = await fetchFromApi();
      cache = { matches, at: now };
      return matches;
    } catch {
      return cache?.matches ?? demoToday();
    }
  }

  return cache!.matches;
}
