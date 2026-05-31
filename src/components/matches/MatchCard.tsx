"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Tv } from "lucide-react";
import type { Match } from "@/types/sports";
import { TeamBadge } from "./TeamBadge";
import { MatchStatusPill } from "./MatchStatusPill";
import { cn } from "@/lib/utils";

export function MatchCard({ match }: { match: Match }) {
  const isLive = match.status === "live";
  const hasScore = match.status !== "scheduled";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className={cn(
        "relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300",
        isLive
          ? "border-brand-red/50 bg-gradient-to-b from-brand-red/15 to-brand-black-light shadow-neon-red"
          : "border-white/10 bg-brand-black-light/90 hover:border-white/25"
      )}
    >
      {isLive && (
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-brand-red to-transparent" />
      )}

      <div className="flex items-center justify-between gap-2 border-b border-white/5 px-4 py-3">
        <span className="truncate text-xs font-medium text-white/50">
          {match.league.name}
        </span>
        <MatchStatusPill match={match} />
      </div>

      <div className="flex flex-1 flex-col gap-4 px-4 py-5">
        <div className="flex items-center gap-3">
          <TeamBadge slug={match.homeTeam.slug} short={match.homeTeam.shortName} size="lg" />
          <div className="min-w-0 flex-1">
            <p className="truncate font-bold leading-tight">{match.homeTeam.name}</p>
          </div>
          {hasScore && (
            <span className="text-2xl font-black tabular-nums">{match.homeScore ?? 0}</span>
          )}
        </div>

        <div className="flex items-center justify-center">
          {hasScore ? (
            <span className="text-xs font-bold uppercase tracking-widest text-white/30">
              —
            </span>
          ) : (
            <span className="rounded-full bg-white/5 px-4 py-1 text-sm font-bold text-white/40">
              VS
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <TeamBadge slug={match.awayTeam.slug} short={match.awayTeam.shortName} size="lg" />
          <div className="min-w-0 flex-1">
            <p className="truncate font-bold leading-tight">{match.awayTeam.name}</p>
          </div>
          {hasScore && (
            <span className="text-2xl font-black tabular-nums">{match.awayScore ?? 0}</span>
          )}
        </div>
      </div>

      <div className="mt-auto border-t border-white/5 bg-black/20 px-4 py-3">
        {match.broadcasters[0] && (
          <p className="mb-2 flex items-center gap-1 text-xs text-white/45">
            <Tv className="h-3 w-3" />
            {match.broadcasters.slice(0, 2).join(" · ")}
          </p>
        )}
        <Link
          href={`/match/${match.slug}`}
          className="flex h-9 w-full items-center justify-center gap-1 rounded-lg bg-brand-red/90 text-sm font-semibold text-white transition hover:bg-brand-red"
        >
          Ver análisis
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
