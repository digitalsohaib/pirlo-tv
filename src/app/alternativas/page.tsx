import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { MarkdownContent } from "@/components/content/MarkdownContent";
import { alternativasContent } from "@/lib/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Pirlo TV Alternativas Legales | Roja Directa",
  "Alternativas seguras a pirlo tv gratis y roja directa. Marcadores y suscripciones oficiales.",
  "/alternativas"
);

export default function AlternativasPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Inicio", href: "/" }, { label: "Alternativas legales" }]}
      />
      <h1 className="text-3xl font-bold">Pirlo TV alternativas legales</h1>
      <p className="mt-2 text-white/60">
        Cubrimos la intención de búsqueda &quot;pirlo tv alternativas&quot; y &quot;roja directa pirlo tv&quot; sin promover piratería.
      </p>
      <MarkdownContent content={alternativasContent} />
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/canales" className="text-brand-red hover:underline">
          Canales oficiales →
        </Link>
        <Link href="/resultados" className="text-brand-red hover:underline">
          Resultados en vivo →
        </Link>
      </div>
    </>
  );
}
