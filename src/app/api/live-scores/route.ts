import { NextResponse } from "next/server";
import { getMatchesForApi } from "@/lib/data/get-matches";

export const dynamic = "force-dynamic";

export async function GET() {
  const matches = (await getMatchesForApi())
    .filter((m) => m.status === "live")
    .map((m) => ({
      id: m.id,
      slug: m.slug,
      home: m.homeTeam.shortName,
      away: m.awayTeam.shortName,
      homeScore: m.homeScore,
      awayScore: m.awayScore,
      minute: m.minute,
      status: m.status,
      league: m.league.name,
    }));

  return NextResponse.json({
    matches,
    timestamp: Date.now(),
  });
}
