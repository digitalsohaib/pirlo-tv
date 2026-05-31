import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { MatchesPanel } from "@/components/matches/MatchesPanel";
import { getTodayMatches } from "@/lib/data/get-matches";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMetadata(
  "Partidos de Hoy | Pirlo TV Fútbol en Vivo",
  "Programación de hoy: horarios, ligas y marcadores en vivo.",
  "/partidos-hoy"
);

export default async function PartidosHoyPage() {
  const matches = await getTodayMatches();

  return (
    <>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Partidos hoy" }]} />
      <h1 className="section-title mb-1">Partidos de hoy</h1>
      <p className="section-desc mb-8">Agenda completa · actualización automática</p>
      <MatchesPanel initialMatches={matches} />
    </>
  );
}
