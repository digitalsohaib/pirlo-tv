import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Card } from "@/components/ui/card";
import { pageMetadata } from "@/lib/seo";

const sportsHub: Record<
  string,
  { title: string; description: string; keywords: string; events: string[] }
> = {
  "formula-1": {
    title: "Pirlo TV F1 | Formula 1 Resultados y Calendario",
    description:
      "Cobertura de Formula 1: Grandes Premios, clasificación y noticias. Pirlo TV F1 en español.",
    keywords: "pirlo tv f1",
    events: ["GP Miami", "GP Mónaco", "GP España", "GP México"],
  },
  motogp: {
    title: "Pirlo TV MotoGP | Resultados y Calendario",
    description: "MotoGP: carreras, standings y análisis. Pirlo TV motogp actualizado.",
    keywords: "pirlo tv motogp",
    events: ["GP Qatar", "GP Argentina", "GP España", "GP Valencia"],
  },
  tenis: {
    title: "Pirlo TV Tenis | ATP, WTA y Carlos Alcaraz",
    description:
      "Tenis en español: ATP, WTA, Grand Slams. Pirlo TV tennis y Carlos Alcaraz.",
    keywords: "pirlo tv tenis, pirlo tv tennis carlos alcaraz",
    events: ["Roland Garros", "Wimbledon", "US Open", "Indian Wells"],
  },
  nba: {
    title: "Pirlo TV Basket | NBA Resultados",
    description: "NBA: resultados, calendario y estadísticas. Pirlo TV basket en vivo (marcadores).",
    keywords: "pirlo tv basket",
    events: ["Lakers vs Celtics", "Warriors vs Nuggets", "Playoffs 2026"],
  },
  ufc: {
    title: "Pirlo TV UFC | Carteleras y Resultados",
    description: "UFC: peleas, resultados y eventos PPV oficiales.",
    keywords: "pirlo tv ufc",
    events: ["UFC 300", "UFC Fight Night", "Peso ligero"],
  },
};

export function generateStaticParams() {
  return Object.keys(sportsHub).map((sport) => ({ sport }));
}

export function generateMetadata({
  params,
}: {
  params: { sport: string };
}): Metadata {
  const hub = sportsHub[params.sport];
  if (!hub) return {};
  return pageMetadata(hub.title, hub.description, `/deportes/${params.sport}`);
}

export default function DeportePage({ params }: { params: { sport: string } }) {
  const hub = sportsHub[params.sport];
  if (!hub) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Ligas", href: "/ligas" },
          { label: hub.title.split("|")[0].trim() },
        ]}
      />
      <h1 className="text-3xl font-bold">{hub.title.split("|")[0].trim()}</h1>
      <p className="mt-2 text-white/60">{hub.description}</p>

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-bold">Próximos eventos</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {hub.events.map((e) => (
            <Card key={e}>
              <p className="font-semibold">{e}</p>
              <p className="text-xs text-white/50">Datos vía API — integración en producción</p>
            </Card>
          ))}
        </div>
      </section>

      <article className="seo-content mt-10 max-w-3xl">
        <h2>Información legal</h2>
        <p>
          Pirlo TV Fútbol no retransmite eventos de {params.sport}. Ofrecemos marcadores, contexto y enlaces a plataformas con derechos oficiales como DAZN, ESPN o Movistar según región.
        </p>
        <p>Palabras clave objetivo: {hub.keywords}.</p>
      </article>

      <Link href="/" className="mt-6 inline-block text-brand-red hover:underline">
        ← Volver al inicio
      </Link>
    </>
  );
}
