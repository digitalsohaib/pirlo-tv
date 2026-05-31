import Link from "next/link";

const footerSections = [
  {
    title: "Fútbol",
    links: [
      { href: "/league/laliga", label: "LaLiga" },
      { href: "/league/premier-league", label: "Premier League" },
      { href: "/league/champions-league", label: "Champions League" },
      { href: "/league/copa-libertadores", label: "Copa Libertadores" },
    ],
  },
  {
    title: "Más deportes",
    links: [
      { href: "/deportes/formula-1", label: "Pirlo TV F1" },
      { href: "/deportes/motogp", label: "Pirlo TV MotoGP" },
      { href: "/deportes/tenis", label: "Pirlo TV Tenis" },
      { href: "/deportes/nba", label: "Pirlo TV Basket" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { href: "/schedule/hoy", label: "Calendario hoy" },
      { href: "/alternativas", label: "Alternativas legales" },
      { href: "/canales", label: "Canales oficiales" },
      { href: "/mundial-2026", label: "Mundial 2026" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-brand-black-light">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <p className="text-lg font-bold">
            Pirlo <span className="text-brand-red">TV Fútbol</span>
          </p>
          <p className="mt-3 text-sm text-white/50">
            Información deportiva legal. Sin streaming pirata. pirlotvfutbol.com
          </p>
        </div>
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/60">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-brand-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Pirlo TV Sports Hub — Datos informativos. Derechos de imagen de terceros.
      </div>
    </footer>
  );
}
