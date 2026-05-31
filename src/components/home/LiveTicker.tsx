"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type TickerItem = {
  slug: string;
  home: string;
  away: string;
  homeScore: number;
  awayScore: number;
  minute?: number;
};

export function LiveTicker({ initial }: { initial: TickerItem[] }) {
  const [items, setItems] = useState(initial);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/live-scores");
        const data = await res.json();
        if (data.matches?.length) setItems(data.matches);
      } catch {
        /* keep */
      }
    };
    load();
    const id = setInterval(load, 20_000);
    return () => clearInterval(id);
  }, []);

  if (!items.length) return null;

  const loop = [...items, ...items];

  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-brand-red/20 bg-brand-red/[0.06]">
      <div className="flex items-center gap-2 border-b border-brand-red/15 px-4 py-2">
        <span className="live-dot" />
        <span className="text-2xs font-bold uppercase tracking-widest text-brand-red">
          Marcadores en vivo
        </span>
      </div>
      <div className="overflow-hidden py-2.5">
        <div className="flex w-max animate-marquee gap-10 px-4">
          {loop.map((m, i) => (
            <Link
              key={`${m.slug}-${i}`}
              href={`/match/${m.slug}`}
              className="flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-brand-red"
            >
              <span>{m.home}</span>
              <span className="rounded bg-black/40 px-2 py-0.5 font-black tabular-nums text-brand-red">
                {m.homeScore}-{m.awayScore}
              </span>
              <span>{m.away}</span>
              {m.minute != null && (
                <span className="text-2xs text-white/40">{m.minute}&apos;</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
