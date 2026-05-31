"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { RefreshCw } from "lucide-react";
import type { Match, MatchStatus } from "@/types/sports";
import { MatchRow } from "./MatchRow";
import { DataSourceBanner } from "./DataSourceBanner";
import { cn } from "@/lib/utils";
import { leagues } from "@/lib/data/leagues";

type Filter = "all" | MatchStatus;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "live", label: "En vivo" },
  { id: "scheduled", label: "Próximos" },
  { id: "finished", label: "Finalizados" },
];

export function MatchesPanel({
  initialMatches,
  title = "Partidos",
  showBanner = false,
}: {
  initialMatches: Match[];
  title?: string;
  showBanner?: boolean;
}) {
  const [matches, setMatches] = useState(initialMatches);
  const [filter, setFilter] = useState<Filter>("all");
  const [leagueSlug, setLeagueSlug] = useState("all");
  const [refreshing, setRefreshing] = useState(false);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const res = await fetch("/api/matches", { cache: "no-store" });
      const data = await res.json();
      if (data.matches) setMatches(data.matches);
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    refresh();
    const id = setInterval(refresh, 30_000);
    return () => clearInterval(id);
  }, [refresh]);

  const filtered = useMemo(() => {
    let list = matches;
    if (filter !== "all") list = list.filter((m) => m.status === filter);
    if (leagueSlug !== "all") list = list.filter((m) => m.league.slug === leagueSlug);
    return list;
  }, [matches, filter, leagueSlug]);

  const liveCount = matches.filter((m) => m.status === "live").length;
  const futbolLeagues = leagues.filter((l) => l.sport === "futbol");

  return (
    <section>
      {showBanner && (
        <div className="mb-4">
          <DataSourceBanner />
        </div>
      )}

      <div className="section-head">
        <div>
          <h2 className="section-title flex items-center gap-2">
            {title}
            {liveCount > 0 && (
              <span className="live-badge">
                <span className="live-dot" />
                {liveCount}
              </span>
            )}
          </h2>
          <p className="section-desc">Toca un partido para ver análisis y TV oficial</p>
        </div>
        <button
          type="button"
          onClick={refresh}
          disabled={refreshing}
          className="btn-ghost !py-2"
        >
          <RefreshCw className={cn("h-4 w-4", refreshing && "animate-spin")} />
          Actualizar
        </button>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={filter === f.id ? "chip-active" : "chip-inactive"}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mb-5 flex gap-2 overflow-x-auto scrollbar-hide">
        <button
          type="button"
          onClick={() => setLeagueSlug("all")}
          className={leagueSlug === "all" ? "chip-active" : "chip-inactive"}
        >
          Todas
        </button>
        {futbolLeagues.map((l) => (
          <button
            key={l.id}
            type="button"
            onClick={() => setLeagueSlug(l.slug)}
            className={leagueSlug === l.slug ? "chip-active" : "chip-inactive"}
          >
            {l.name}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="card py-16 text-center text-sm text-white/40">
          No hay partidos con estos filtros
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((m) => (
            <MatchRow key={m.id} match={m} />
          ))}
        </div>
      )}
    </section>
  );
}
