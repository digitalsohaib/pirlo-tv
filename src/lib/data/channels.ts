import type { Channel } from "@/types/sports";

export const channels: Channel[] = [
  {
    id: "espn",
    name: "ESPN",
    slug: "espn",
    description:
      "Red internacional de deportes con cobertura de fútbol, NBA, F1 y eventos globales mediante suscripción oficial.",
    countries: ["Argentina", "México", "Chile", "Colombia", "Estados Unidos"],
    sportsRights: ["Copa Libertadores", "LaLiga (regional)", "NBA", "UFC"],
    devices: ["Smart TV", "Web", "iOS", "Android", "Consolas"],
    officialUrl: "https://www.espn.com",
  },
  {
    id: "tnt-sports",
    name: "TNT Sports",
    slug: "tnt-sports",
    description:
      "Emisora con derechos de Premier League y competiciones europeas en varios mercados latinoamericanos.",
    countries: ["Argentina", "Chile", "Brasil"],
    sportsRights: ["Premier League", "Champions League", "Libertadores"],
    devices: ["Smart TV", "Web", "Apps móviles"],
    officialUrl: "https://www.tntsports.com",
  },
  {
    id: "fox-sports",
    name: "Fox Sports",
    slug: "fox-sports",
    description:
      "Cobertura de ligas locales e internacionales con transmisiones oficiales por cable y streaming.",
    countries: ["México", "Argentina", "Estados Unidos"],
    sportsRights: ["Liga MX", "CONCACAF", "NFL", "MLB"],
    devices: ["TV por cable", "Streaming oficial"],
    officialUrl: "https://www.foxsports.com",
  },
  {
    id: "dazn",
    name: "DAZN",
    slug: "dazn",
    description:
      "Plataforma global de streaming deportivo con derechos de boxeo, fútbol europeo y MotoGP en varias regiones.",
    countries: ["España", "Italia", "Alemania", "Canadá"],
    sportsRights: ["Serie A", "MotoGP", "Boxeo", "Champions League (selecto)"],
    devices: ["Smart TV", "Web", "Fire TV", "Apple TV"],
    officialUrl: "https://www.dazn.com",
  },
  {
    id: "movistar-deportes",
    name: "Movistar Deportes",
    slug: "movistar-deportes",
    description:
      "Canal premium en España con LaLiga, Champions y Fórmula 1 en paquetes oficiales.",
    countries: ["España", "Perú"],
    sportsRights: ["LaLiga", "Champions League", "Formula 1"],
    devices: ["Decodificador", "Movistar Plus+", "Apps"],
    officialUrl: "https://www.movistarplus.es",
  },
  {
    id: "tyc-sports",
    name: "TyC Sports",
    slug: "tyc-sports",
    description:
      "Referente del fútbol argentino con transmisiones oficiales de Primera División y copas nacionales.",
    countries: ["Argentina", "Uruguay"],
    sportsRights: ["Liga Profesional Argentina", "Copa Argentina"],
    devices: ["TV cable", "TyC Sports Play"],
    officialUrl: "https://www.tycsports.com",
  },
];

export function getChannelBySlug(slug: string): Channel | undefined {
  return channels.find((c) => c.slug === slug);
}
