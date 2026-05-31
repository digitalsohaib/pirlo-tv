"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Match } from "@/types/sports";
import { TeamBadge } from "./TeamBadge";
import { formatMatchTime } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function MatchRow({ match }: { match: Match }) {
  const isLive = match.status === "live";
  const isFinished = match.status === "finished";
  const hasScore = match.status !== "scheduled";

  return (
    <Link
      href={`/match/${match.slug}`}
      className={cn(
        "group block rounded-2xl border transition-all duration-200",
        isLive
          ? "border-brand-red/35 bg-live-row shadow-glow-sm hover:border-brand-red/55"
          : "card-interactive"
      )}
    >
      <div className="flex items-stretch gap-3 p-3 sm:p-4">
        {/* Status column */}
        <div className="flex w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-black/30 py-2">
          {isLive ? (
            <>
              <span className="live-dot mb-1.5" />
              <span className="text-2xs font-bold uppercase text-brand-red">Live</span>
              <span className="mt-0.5 text-sm font-bold tabular-nums">{match.minute}&apos;</span>
            </>
          ) : (
            <>
              <span className="text-2xs font-semibold uppercase text-white/30">
                {isFinished ? "Fin" : "Hoy"}
              </span>
              <span className="mt-0.5 text-sm font-bold tabular-nums text-white">
                {isFinished ? "FT" : formatMatchTime(match.kickoff)}
              </span>
            </>
          )}
        </div>

        {/* Teams + score */}
        <div className="min-w-0 flex-1 space-y-2.5">
          <div className="flex items-center gap-2">
            <TeamBadge slug={match.homeTeam.slug} short={match.homeTeam.shortName} size="sm" />
            <span className="min-w-0 flex-1 truncate text-sm font-semibold">
              {match.homeTeam.name}
            </span>
            {hasScore && (
              <span className="w-6 text-right text-lg font-black tabular-nums">
                {match.homeScore}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <TeamBadge slug={match.awayTeam.slug} short={match.awayTeam.shortName} size="sm" />
            <span className="min-w-0 flex-1 truncate text-sm font-semibold">
              {match.awayTeam.name}
            </span>
            {hasScore && (
              <span className="w-6 text-right text-lg font-black tabular-nums">
                {match.awayScore}
              </span>
            )}
          </div>
          {!hasScore && (
            <p className="text-center text-2xs font-bold uppercase text-white/25">vs</p>
          )}
        </div>

        <div className="flex shrink-0 flex-col items-center justify-center">
          {hasScore && (
            <div className="score-box mb-2 hidden sm:flex">
              {match.homeScore}:{match.awayScore}
            </div>
          )}
          <ChevronRight className="h-5 w-5 text-white/20 group-hover:text-brand-red" />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2 text-2xs">
        <span className="truncate font-medium text-white/40">{match.league.name}</span>
        {match.broadcasters[0] && (
          <span className="truncate text-white/30">{match.broadcasters[0]}</span>
        )}
      </div>
    </Link>
  );
}
