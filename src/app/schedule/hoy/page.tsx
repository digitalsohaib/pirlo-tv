import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { MatchesPanel } from "@/components/matches/MatchesPanel";
import { getTodayMatches } from "@/lib/data/get-matches";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMetadata(
  "Calendario de Hoy | Pirlo TV",
  "Horarios y partidos programados para hoy.",
  "/schedule/hoy"
);

export default async function ScheduleHoyPage() {
  const matches = await getTodayMatches();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Calendario", href: "/schedule/hoy" },
        ]}
      />
      <h1 className="section-title mb-1">Calendario de hoy</h1>
      <p className="section-desc mb-8">Horarios y partidos del día</p>
      <MatchesPanel initialMatches={matches} />
    </>
  );
}
