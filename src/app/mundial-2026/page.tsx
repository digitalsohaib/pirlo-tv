import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Card } from "@/components/ui/card";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Mundial 2026 | Pirlo TV Copa del Mundo",
  "Sedes, grupos, calendario y cobertura del Mundial FIFA 2026 en USA, México y Canadá.",
  "/mundial-2026"
);

const groups = [
  { name: "Grupo A", teams: ["México", "Sudáfrica", "Corea del Sur", "Por definir"] },
  { name: "Grupo B", teams: ["Canadá", "Por definir", "Por definir", "Por definir"] },
  { name: "Grupo C", teams: ["Brasil", "Marruecos", "Haití", "Escocia"] },
  { name: "Grupo D", teams: ["Estados Unidos", "Paraguay", "Australia", "Por definir"] },
];

export default function Mundial2026Page() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Inicio", href: "/" }, { label: "Mundial 2026" }]}
      />
      <h1 className="text-3xl font-bold">FIFA World Cup 2026</h1>
      <p className="mt-2 max-w-2xl text-white/60">
        Hub dedicado al torneo más grande del fútbol. Sedes en Norteamérica, 48 selecciones y cobertura Pirlo TV en español.
      </p>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <Card>
          <h2 className="font-bold text-brand-red">48 equipos</h2>
          <p className="mt-2 text-sm text-white/60">Formato ampliado con más partidos y emoción.</p>
        </Card>
        <Card>
          <h2 className="font-bold text-brand-red">3 sedes</h2>
          <p className="mt-2 text-sm text-white/60">Estados Unidos, México y Canadá.</p>
        </Card>
        <Card>
          <h2 className="font-bold text-brand-red">Junio–Julio 2026</h2>
          <p className="mt-2 text-sm text-white/60">Calendario oficial próximamente integrado vía API.</p>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-bold">Grupos (preview)</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {groups.map((g) => (
            <Card key={g.name}>
              <h3 className="font-semibold">{g.name}</h3>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                {g.teams.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 seo-content max-w-3xl">
        <h2>Cobertura Pirlo TV Mundial 2026</h2>
        <p>
          Sigue cada fase del torneo con marcadores en vivo, previas por partido y guías de canales oficiales en tu país.
          Nuestra plataforma está optimizada para búsquedas como &quot;pirlo tv&quot; y &quot;mundial 2026 en vivo&quot; con contenido legal y de calidad editorial.
        </p>
        <p>
          Enlaza desde aquí hacia ligas nacionales, selecciones y análisis táctico de cada encuentro del mundial.
        </p>
      </section>

      <Link href="/schedule/hoy" className="mt-6 inline-block text-brand-red hover:underline">
        Ver partidos de hoy →
      </Link>
    </>
  );
}
