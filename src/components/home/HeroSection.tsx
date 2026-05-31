import Link from "next/link";
import { ArrowRight, Calendar, Trophy } from "lucide-react";
import type { Match } from "@/types/sports";
import { TeamBadge } from "@/components/matches/TeamBadge";

export function HeroSection({
  liveCount,
  todayCount,
  featured,
}: {
  liveCount: number;
  todayCount: number;
  featured?: Match;
}) {
  return (
    <section className="mb-6 overflow-hidden rounded-3xl border border-white/[0.08] bg-hero-mesh shadow-card">
      <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-red/30 bg-brand-red/10 px-3 py-1 text-2xs font-bold uppercase tracking-widest text-brand-red">
            <span className="live-dot" />
            Pirlo TV 2026
          </p>
          <h1 className="text-3xl font-extrabold leading-[1.08] tracking-tight md:text-4xl lg:text-[2.75rem]">
            Resultados y fútbol en vivo
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/50 md:text-base">
            Marcadores al instante, calendario del día y guía de canales legales. Todo en español.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/partidos-hoy" className="btn-primary">
              <Calendar className="h-4 w-4" />
              Partidos hoy
            </Link>
            <Link href="/mundial-2026" className="btn-ghost">
              <Trophy className="h-4 w-4" />
              Mundial 2026
            </Link>
          </div>
          <div className="mt-8 flex gap-6">
            <Stat n={liveCount} label="En vivo" accent />
            <Stat n={todayCount} label="Hoy" />
          </div>
        </div>

        {featured && (
          <Link
            href={`/match/${featured.slug}`}
            className="card group flex flex-col justify-between border-brand-red/25 bg-surface-overlay p-5 transition hover:border-brand-red/45 hover:shadow-glow"
          >
            <div>
              <span className="live-badge mb-4">Partido destacado</span>
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col items-center gap-2">
                  <TeamBadge slug={featured.homeTeam.slug} short={featured.homeTeam.shortName} size="lg" />
                  <span className="text-center text-xs font-semibold text-white/80">
                    {featured.homeTeam.shortName}
                  </span>
                </div>
                <div className="score-box !text-3xl">
                  {featured.homeScore}:{featured.awayScore}
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TeamBadge slug={featured.awayTeam.slug} short={featured.awayTeam.shortName} size="lg" />
                  <span className="text-center text-xs font-semibold text-white/80">
                    {featured.awayTeam.shortName}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-center text-2xs text-white/40">{featured.league.name}</p>
            </div>
            <span className="mt-4 flex items-center justify-center gap-1 text-sm font-semibold text-brand-red group-hover:gap-2">
              Ver análisis <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}

function Stat({ n, label, accent }: { n: number; label: string; accent?: boolean }) {
  return (
    <div>
      <p
        className={
          accent
            ? "text-3xl font-black tabular-nums text-brand-red"
            : "text-3xl font-black tabular-nums text-white"
        }
      >
        {n}
      </p>
      <p className="text-2xs font-medium uppercase tracking-wider text-white/40">{label}</p>
    </div>
  );
}
