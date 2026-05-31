import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TeamBadge } from "@/components/matches/TeamBadge";
import { teams } from "@/lib/data/teams";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Equipos de Fútbol | Pirlo TV",
  "Fichas de clubes con plantilla, resultados y próximos partidos.",
  "/equipos"
);

export default function EquiposPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Equipos" }]} />
      <h1 className="section-title">Equipos</h1>
      <p className="section-desc mb-8">Fichas, resultados y calendario</p>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {teams.map((t) => (
          <Link
            key={t.id}
            href={`/team/${t.slug}`}
            className="card-interactive flex items-center gap-3 p-4"
          >
            <TeamBadge slug={t.slug} short={t.shortName} size="md" />
            <div className="min-w-0">
              <h2 className="truncate font-semibold text-white">{t.name}</h2>
              <p className="text-2xs text-white/40">{t.country}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
