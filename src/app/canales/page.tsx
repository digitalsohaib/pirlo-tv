import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ChannelCard } from "@/components/channels/ChannelCard";
import { channels } from "@/lib/data/channels";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Canales Deportivos Oficiales | Pirlo TV",
  "ESPN, TNT Sports, DAZN, Fox Sports y más.",
  "/canales"
);

export default function CanalesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Canales" }]} />
      <h1 className="section-title">Canales oficiales</h1>
      <p className="section-desc mb-8">
        Información legal sobre emisoras con derechos deportivos
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {channels.map((c) => (
          <ChannelCard key={c.id} channel={c} />
        ))}
      </div>
    </>
  );
}
