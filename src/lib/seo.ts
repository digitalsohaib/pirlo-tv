import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pirlotvfutbol.com";
export const SITE_NAME = "Pirlo TV Fútbol";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Pirlo TV Fútbol | Partidos en Vivo, Resultados y Calendario 2026",
    template: "%s | Pirlo TV Fútbol",
  },
  description:
    "Consulta partidos de fútbol en vivo, resultados, estadísticas y cobertura del Mundial 2026, Champions League, LaLiga y más. Información deportiva legal y actualizada.",
  keywords: [
    "pirlo tv",
    "pirlo tv fútbol en vivo",
    "pirlo tv online",
    "pirlo tv f1",
    "pirlo tv alternativas",
    "pirlo tv basket",
    "pirlo tv motogp",
    "pirlo tv tenis",
    "tv pirlo",
    "ver pirlo tv",
    "resultados fútbol",
    "calendario fútbol 2026",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: SITE_NAME,
    title: "Pirlo TV Fútbol | Partidos, Resultados y Estadísticas",
    description:
      "Hub deportivo en español: marcadores en vivo, análisis, ligas y canales oficiales.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
};

export function pageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
    },
  };
}
