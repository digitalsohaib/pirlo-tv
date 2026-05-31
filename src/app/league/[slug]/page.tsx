import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { MarkdownContent } from "@/components/content/MarkdownContent";
import { MatchRow } from "@/components/matches/MatchRow";
import { leagues, getLeagueBySlug, getStandingsForLeague } from "@/lib/data/leagues";
import { getMatchesByLeague } from "@/lib/data/get-matches";
import { getLeagueSeoContent } from "@/lib/data/content";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return leagues.filter((l) => l.sport === "futbol").map((l) => ({ slug: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const league = getLeagueBySlug(params.slug);
  if (!league) return {};
  return pageMetadata(
    `${league.name} | Clasificación, Partidos y Estadísticas`,
    `Cobertura completa de ${league.name}: tabla, fixture y análisis. Pirlo TV ${league.slug}.`,
    `/league/${params.slug}`
  );
}

export default async function LeaguePage({ params }: { params: { slug: string } }) {
  const league = getLeagueBySlug(params.slug);
  if (!league) notFound();

  const standings = getStandingsForLeague(league.slug);
  const matches = await getMatchesByLeague(league.slug);
  const content = getLeagueSeoContent(league.name);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Ligas", href: "/ligas" },
          { label: league.name },
        ]}
      />
      <h1 className="section-title">{league.name}</h1>
      <p className="section-desc mb-8">{league.country}</p>

      <section className="card mb-8 overflow-x-auto p-4">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/35">
          Clasificación
        </h2>
        <table className="w-full min-w-[400px] text-sm">
          <thead>
            <tr className="border-b border-white/[0.08] text-left text-2xs uppercase text-white/35">
              <th className="p-2">#</th>
              <th className="p-2">Equipo</th>
              <th className="p-2">PJ</th>
              <th className="p-2">Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((r) => (
              <tr key={r.team.id} className="border-b border-white/5">
                <td className="p-2">{r.position}</td>
                <td className="p-2">
                  <Link href={`/team/${r.team.slug}`} className="hover:text-brand-red">
                    {r.team.name}
                  </Link>
                </td>
                <td className="p-2">{r.played}</td>
                <td className="p-2 font-bold">{r.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {matches.length > 0 && (
        <section className="mt-10">
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

      <div className="mt-10">
        <MarkdownContent content={content} />
      </div>
    </>
  );
}
