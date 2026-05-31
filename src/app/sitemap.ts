import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getAllMatchSlugs } from "@/lib/data/matches";
import { teams } from "@/lib/data/teams";
import { leagues } from "@/lib/data/leagues";
import { channels } from "@/lib/data/channels";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/partidos-hoy",
    "/ligas",
    "/equipos",
    "/canales",
    "/resultados",
    "/mundial-2026",
    "/schedule/hoy",
    "/alternativas",
    "/deportes/formula-1",
    "/deportes/motogp",
    "/deportes/tenis",
    "/deportes/nba",
    "/deportes/ufc",
  ];

  const now = new Date();

  return [
    ...staticPages.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "hourly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...getAllMatchSlugs().map((slug) => ({
      url: `${SITE_URL}/match/${slug}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.7,
    })),
    ...teams.map((t) => ({
      url: `${SITE_URL}/team/${t.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...leagues
      .filter((l) => l.sport === "futbol")
      .map((l) => ({
        url: `${SITE_URL}/league/${l.slug}`,
        lastModified: now,
        changeFrequency: "daily" as const,
        priority: 0.75,
      })),
    ...channels.map((c) => ({
      url: `${SITE_URL}/channel/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
