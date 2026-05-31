import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { leagues } from "@/lib/data/leagues";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Ligas de Fútbol y Deportes | Pirlo TV",
  "LaLiga, Premier, Champions, Libertadores, F1, MotoGP, tenis y NBA.",
  "/ligas"
);

function LeagueCard({
  name,
  country,
  href,
}: {
  name: string;
  country: string;
  href: string;
}) {
  return (
    <Link href={href} className="card-interactive group block p-5">
      <p className="text-2xs font-bold uppercase tracking-wider text-brand-red/80">Liga</p>
      <h3 className="mt-1 text-base font-bold text-white group-hover:text-brand-red">{name}</h3>
      <p className="mt-1 text-sm text-white/40">{country}</p>
    </Link>
  );
}

export default function LigasPage() {
  const futbol = leagues.filter((l) => l.sport === "futbol");
  const otros = leagues.filter((l) => l.sport !== "futbol");

  return (
    <>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Ligas" }]} />
      <h1 className="section-title">Ligas y competiciones</h1>
      <p className="section-desc mb-8">Explora tablas, partidos y estadísticas</p>

      <section>
        <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/35">Fútbol</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {futbol.map((l) => (
            <LeagueCard key={l.id} name={l.name} country={l.country} href={`/league/${l.slug}`} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/35">
          Otros deportes
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {otros.map((l) => (
            <LeagueCard
              key={l.id}
              name={l.name}
              country={l.country}
              href={`/deportes/${l.slug}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
