import { NextRequest, NextResponse } from "next/server";
import type { SearchResult } from "@/types/sports";
import { getTodayMatches } from "@/lib/data/get-matches";
import { teams } from "@/lib/data/teams";
import { leagues } from "@/lib/data/leagues";
import { channels } from "@/lib/data/channels";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.toLowerCase().trim() ?? "";
  if (q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const matches = await getTodayMatches();
  const results: SearchResult[] = [];

  matches
    .filter(
      (m) =>
        m.homeTeam.name.toLowerCase().includes(q) ||
        m.awayTeam.name.toLowerCase().includes(q) ||
        m.league.name.toLowerCase().includes(q)
    )
    .slice(0, 5)
    .forEach((m) =>
      results.push({
        type: "match",
        id: m.id,
        title: `${m.homeTeam.name} vs ${m.awayTeam.name}`,
        subtitle: m.league.name,
        href: `/match/${m.slug}`,
      })
    );

  teams
    .filter((t) => t.name.toLowerCase().includes(q))
    .slice(0, 4)
    .forEach((t) =>
      results.push({
        type: "team",
        id: t.id,
        title: t.name,
        subtitle: t.country,
        href: `/team/${t.slug}`,
      })
    );

  leagues
    .filter((l) => l.name.toLowerCase().includes(q))
    .slice(0, 3)
    .forEach((l) =>
      results.push({
        type: "league",
        id: l.id,
        title: l.name,
        subtitle: l.country,
        href: `/league/${l.slug}`,
      })
    );

  channels
    .filter((c) => c.name.toLowerCase().includes(q))
    .slice(0, 3)
    .forEach((c) =>
      results.push({
        type: "channel",
        id: c.id,
        title: c.name,
        subtitle: "Canal oficial",
        href: `/channel/${c.slug}`,
      })
    );

  return NextResponse.json({ results: results.slice(0, 10) });
}
