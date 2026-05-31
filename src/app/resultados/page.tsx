import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { MatchesPanel } from "@/components/matches/MatchesPanel";
import { getTodayMatches } from "@/lib/data/get-matches";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMetadata(
  "Resultados en Vivo | Pirlo TV",
  "Marcadores actualizados en tiempo real.",
  "/resultados"
);

export default async function ResultadosPage() {
  const matches = await getTodayMatches();

  return (
    <>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Resultados" }]} />
      <h1 className="section-title mb-1">Resultados en vivo</h1>
      <p className="section-desc mb-8">Marcadores actualizados automáticamente</p>
      <MatchesPanel initialMatches={matches} title="Todos los partidos" />
    </>
  );
}
