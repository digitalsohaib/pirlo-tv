import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/card";
import { channels, getChannelBySlug } from "@/lib/data/channels";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return channels.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const channel = getChannelBySlug(params.slug);
  if (!channel) return {};
  return pageMetadata(
    `${channel.name} | Dónde Ver Deportes Legalmente`,
    `${channel.description.slice(0, 140)}...`,
    `/channel/${params.slug}`
  );
}

export default function ChannelPage({ params }: { params: { slug: string } }) {
  const channel = getChannelBySlug(params.slug);
  if (!channel) notFound();

  const faqs = [
    {
      question: `¿Qué deportes transmite ${channel.name}?`,
      answer: channel.sportsRights.join(", "),
    },
    {
      question: "¿En qué países está disponible?",
      answer: channel.countries.join(", "),
    },
    {
      question: "¿Pirlo TV ofrece el stream de este canal?",
      answer:
        "No. Solo informamos sobre el servicio oficial. Debes suscribirte o contratar el paquete legal en tu región.",
    },
  ];

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Canales", href: "/canales" },
          { label: channel.name },
        ]}
      />
      <h1 className="text-3xl font-bold">{channel.name}</h1>
      <p className="mt-4 max-w-2xl text-white/70">{channel.description}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="font-semibold">Derechos deportivos</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-white/70">
            {channel.sportsRights.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="font-semibold">Disponibilidad</h2>
          <p className="mt-2 text-sm text-white/70">{channel.countries.join(" · ")}</p>
          <h3 className="mt-4 font-semibold">Dispositivos</h3>
          <p className="text-sm text-white/70">{channel.devices.join(" · ")}</p>
        </Card>
      </div>

      <a
        href={channel.officialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex rounded-lg bg-brand-red px-6 py-3 font-semibold text-white hover:bg-brand-red-dark"
      >
        Visitar web oficial
      </a>

      <section className="mt-10">
        <h2 className="text-xl font-bold">FAQ</h2>
        {faqs.map((f) => (
          <div key={f.question} className="mt-4">
            <h3 className="font-semibold">{f.question}</h3>
            <p className="text-white/70">{f.answer}</p>
          </div>
        ))}
      </section>
    </>
  );
}
