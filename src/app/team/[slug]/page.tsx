import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { MarkdownContent } from "@/components/content/MarkdownContent";
import { MatchRow } from "@/components/matches/MatchRow";
import { TeamBadge } from "@/components/matches/TeamBadge";
import { teams, getTeamBySlug } from "@/lib/data/teams";
import { getMatchesByTeam } from "@/lib/data/get-matches";
import { getTeamSeoContent } from "@/lib/data/content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return teams.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const team = getTeamBySlug(params.slug);
  if (!team) return {};
  return pageMetadata(
    `${team.name} | Plantilla, Resultados y Partidos`,
    `Ficha de ${team.name}: últimos partidos, calendario y estadísticas en Pirlo TV.`,
    `/team/${params.slug}`
  );
}

export default async function TeamPage({ params }: { params: { slug: string } }) {
  const team = getTeamBySlug(params.slug);
  if (!team) notFound();

  const matches = await getMatchesByTeam(team.slug);
  const content = getTeamSeoContent(team.name);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Equipos", href: "/equipos" },
          { label: team.name },
        ]}
      />
      <div className="mb-8 flex items-center gap-4">
        <TeamBadge slug={team.slug} short={team.shortName} size="lg" />
        <div>
          <h1 className="section-title">{team.name}</h1>
          <p className="section-desc">{team.country}</p>
        </div>
      </div>

      {matches.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/35">
            Partidos
          </h2>
          <div className="space-y-2">
            {matches.map((m) => (
              <MatchRow key={m.id} match={m} />
            ))}
          </div>
        </section>
      )}

      <MarkdownContent content={content} />

      <Link href="/schedule/hoy" className="btn-primary mt-8 inline-flex">
        Ver calendario
      </Link>
    </>
  );
}
