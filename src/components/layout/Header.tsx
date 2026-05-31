"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Tv2 } from "lucide-react";
import { SearchAutocomplete } from "@/components/search/SearchAutocomplete";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/partidos-hoy", label: "Partidos Hoy" },
  { href: "/ligas", label: "Ligas" },
  { href: "/equipos", label: "Equipos" },
  { href: "/canales", label: "Canales" },
  { href: "/resultados", label: "Resultados" },
  { href: "/mundial-2026", label: "Mundial 2026" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-black/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 lg:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-red shadow-neon-red">
            <Tv2 className="h-5 w-5 text-white" />
          </span>
          <span className="hidden font-bold tracking-tight sm:block">
            Pirlo <span className="text-brand-red">TV</span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <SearchAutocomplete />
          <button
            type="button"
            className="rounded-lg p-2 text-white/80 xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-white/10 bg-brand-black-light xl:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-white/80 hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
