import type { Match, MatchStatus } from "@/types/sports";
import { formatMatchTime } from "@/lib/utils";
import { cn } from "@/lib/utils";

const labels: Record<MatchStatus, string> = {
  live: "EN VIVO",
  scheduled: "Próximo",
  finished: "Final",
  postponed: "Aplazado",
};

export function MatchStatusPill({ match }: { match: Match }) {
  const { status } = match;

  return (
    <div
      className={cn(
        "flex min-w-[4.5rem] flex-col items-center justify-center rounded-lg px-2 py-1.5 text-center",
        status === "live" && "bg-brand-red/15 ring-1 ring-brand-red/40",
        status === "scheduled" && "bg-white/5",
        status === "finished" && "bg-white/5 opacity-70",
        status === "postponed" && "bg-amber-500/10"
      )}
    >
      {status === "live" ? (
        <>
          <span className="live-badge scale-90 border-0 bg-transparent p-0 shadow-none">
            LIVE
          </span>
          {match.minute != null && (
            <span className="mt-0.5 text-xs font-bold tabular-nums text-brand-red">
              {match.minute}&apos;
            </span>
          )}
        </>
      ) : (
        <>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-white/50">
            {labels[status]}
          </span>
          <span className="text-xs font-bold tabular-nums text-white">
            {status === "finished" ? "FT" : formatMatchTime(match.kickoff)}
          </span>
        </>
      )}
    </div>
  );
}
