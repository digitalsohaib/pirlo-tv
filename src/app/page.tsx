import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { LiveTicker } from "@/components/home/LiveTicker";
import { HomeSidebar } from "@/components/home/HomeSidebar";
import { MatchesPanel } from "@/components/matches/MatchesPanel";
import { ChannelCard } from "@/components/channels/ChannelCard";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";
import { getTodayMatches, getLiveMatches } from "@/lib/data/get-matches";
import { channels } from "@/lib/data/channels";
import { homepageSeoIntro, faqHome } from "@/lib/data/content";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const matches = await getTodayMatches();
  const live = await getLiveMatches();
  const featured = live[0] ?? matches[0];
  const ticker = live.map((m) => ({
    slug: m.slug,
    home: m.homeTeam.shortName,
    away: m.awayTeam.shortName,
    homeScore: m.homeScore ?? 0,
    awayScore: m.awayScore ?? 0,
    minute: m.minute,
  }));

  return (
    <>
      <JsonLd data={faqSchema(faqHome)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Pirlo TV Fútbol",
          url: SITE_URL,
        }}
      />

      <HeroSection liveCount={live.length} todayCount={matches.length} featured={featured} />
      <LiveTicker initial={ticker} />

      <div className="grid gap-8 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_300px]">
        <MatchesPanel initialMatches={matches} title="Partidos de hoy" showBanner />
        <HomeSidebar liveCount={live.length} />
      </div>

      <section className="mt-14">
        <div className="section-head">
          <div>
            <h2 className="section-title">Canales oficiales</h2>
            <p className="section-desc">Dónde ver el fútbol de forma legal</p>
          </div>
          <Link href="/canales" className="btn-ghost text-brand-red">
            Ver todos
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.slice(0, 3).map((c) => (
            <ChannelCard key={c.id} channel={c} />
          ))}
        </div>
      </section>

      <section className="seo-content mt-14 max-w-2xl border-t border-white/[0.06] pt-10">
        <h2>Pirlo TV Fútbol</h2>
        {homepageSeoIntro.split("\n").map((p, i) => (
          <p key={i}>{p.trim()}</p>
        ))}
      </section>
    </>
  );
}
