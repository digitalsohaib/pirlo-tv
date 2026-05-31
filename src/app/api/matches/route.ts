import { NextResponse } from "next/server";
import { getMatchesForApi } from "@/lib/data/get-matches";
import { getLiveCount } from "@/lib/data/live-engine";
import { getDataSourceLabel } from "@/lib/data/source";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const liveOnly = searchParams.get("live") === "true";
  const force = searchParams.get("refresh") === "true";

  let matches = await getMatchesForApi(force);
  if (liveOnly) {
    matches = matches.filter((m) => m.status === "live");
  }

  const source = getDataSourceLabel();

  return NextResponse.json({
    matches,
    liveCount: getLiveCount(matches),
    source: source.mode,
    updatedAt: new Date().toISOString(),
  });
}
