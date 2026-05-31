"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { SiteLogo } from "@/components/layout/SiteLogo";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/partidos-hoy", label: "Partidos" },
  { href: "/resultados", label: "Resultados" },
  { href: "/ligas", label: "Ligas" },
  { href: "/canales", label: "Canales" },
  { href: "/mundial-2026", label: "Mundial" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-surface/90 backdrop-blur-xl">
      <div className="container-app">
        <div className="flex h-14 items-center gap-4 md:h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <SiteLogo size={36} showLabel className="[&_span]:hidden [&_span]:sm:flex" />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition",
                    active
                      ? "bg-brand-red/15 text-brand-red"
                      : "text-white/55 hover:bg-white/[0.06] hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="relative ml-auto hidden max-w-xs flex-1 md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
            <form action="/partidos-hoy" method="get">
              <input
                type="search"
                name="q"
                placeholder="Buscar equipo o liga..."
                className="input-search"
              />
            </form>
          </div>

          <Link href="/partidos-hoy" className="btn-primary shrink-0 !py-2 !text-xs md:!text-sm">
            <span className="live-dot" />
            En vivo
          </Link>
        </div>

        <nav
          className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide lg:hidden"
          aria-label="Móvil"
        >
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "chip-active" : "chip-inactive"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
