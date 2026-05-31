import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd, sportsEventSchema, faqSchema, breadcrumbSchema } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getMatchBySlug } from "@/lib/data/get-matches";
import { getAllMatchSlugs } from "@/lib/data/matches";
import { getMatchPreviewContent } from "@/lib/data/content";
import { formatMatchTime, formatMatchDate } from "@/lib/utils";
import { SITE_URL, pageMetadata } from "@/lib/seo";
import { MarkdownContent } from "@/components/content/MarkdownContent";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return getAllMatchSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const match = await getMatchBySlug(params.slug);
  if (!match) return {};
  const title = `${match.homeTeam.name} vs ${match.awayTeam.name} | Previa y Análisis`;
  const description = `Previa completa ${match.homeTeam.name} vs ${match.awayTeam.name}. ${match.league.name}, horario, pronóstico y canales oficiales. Pirlo TV.`;
  return pageMetadata(title, description, `/match/${params.slug}`);
}

export default async function MatchPage({ params }: { params: { slug: string } }) {
  const match = await getMatchBySlug(params.slug);
  if (!match) notFound();

  const content = getMatchPreviewContent(
    match.homeTeam.name,
    match.awayTeam.name,
    match.league.name
  );

  const faqs = [
    {
      question: `¿A qué hora juegan ${match.homeTeam.name} y ${match.awayTeam.name}?`,
      answer: `El partido está programado para el ${formatMatchDate(match.kickoff)} a las ${formatMatchTime(match.kickoff)} (hora local estimada).`,
    },
    {
      question: "¿Dónde ver el partido legalmente?",
      answer: `Consulta emisoras como ${match.broadcasters.join(", ")} según tu país. No ofrecemos streaming pirata.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={sportsEventSchema({
          name: `${match.homeTeam.name} vs ${match.awayTeam.name}`,
          startDate: match.kickoff,
          homeTeam: match.homeTeam.name,
          awayTeam: match.awayTeam.name,
          url: `${SITE_URL}/match/${match.slug}`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", url: SITE_URL },
          { name: match.league.name, url: `${SITE_URL}/league/${match.league.slug}` },
          {
            name: `${match.homeTeam.name} vs ${match.awayTeam.name}`,
            url: `${SITE_URL}/match/${match.slug}`,
          },
        ])}
      />

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: match.league.name, href: `/league/${match.league.slug}` },
          { label: `${match.homeTeam.shortName} vs ${match.awayTeam.shortName}` },
        ]}
      />

      <header className="mb-8">
        <Badge variant="league">{match.league.name}</Badge>
        {match.status === "live" && (
          <span className="ml-2">
            <Badge variant="live">En vivo</Badge>
          </span>
        )}
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">
          {match.homeTeam.name} vs {match.awayTeam.name}
        </h1>
        <p className="mt-2 text-white/60">
          {formatMatchDate(match.kickoff)} · {formatMatchTime(match.kickoff)}
          {match.venue && ` · ${match.venue}`}
        </p>
      </header>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="font-semibold">Marcador</h2>
          <p className="mt-2 text-4xl font-bold">
            {match.status === "scheduled"
              ? "VS"
              : `${match.homeScore ?? 0} - ${match.awayScore ?? 0}`}
          </p>
          {match.status === "live" && match.minute && (
            <p className="mt-1 text-sm text-brand-red">{match.minute}&apos;</p>
          )}
        </Card>
        <Card>
          <h2 className="font-semibold">Canales oficiales</h2>
          <ul className="mt-2 space-y-1 text-sm text-white/70">
            {match.broadcasters.map((b) => (
              <li key={b}>
                <Link href="/canales" className="hover:text-brand-red">
                  {b}
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <MarkdownContent content={content} />

      <section className="mt-10">
        <h2 className="text-xl font-bold">Preguntas frecuentes</h2>
        {faqs.map((f) => (
          <div key={f.question} className="mt-4">
            <h3 className="font-semibold">{f.question}</h3>
            <p className="text-white/70">{f.answer}</p>
          </div>
        ))}
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href={`/team/${match.homeTeam.slug}`} className="text-brand-red hover:underline">
          Ficha {match.homeTeam.name}
        </Link>
        <Link href={`/team/${match.awayTeam.slug}`} className="text-brand-red hover:underline">
          Ficha {match.awayTeam.name}
        </Link>
        <Link href="/schedule/hoy" className="text-brand-red hover:underline">
          Calendario de hoy
        </Link>
      </div>
    </>
  );
}
