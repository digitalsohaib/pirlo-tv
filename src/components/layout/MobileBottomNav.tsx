"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Home, Radio, Trophy, Tv } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/partidos-hoy", label: "Partidos", icon: Calendar },
  { href: "/resultados", label: "Live", icon: Radio },
  { href: "/ligas", label: "Ligas", icon: Trophy },
  { href: "/canales", label: "TV", icon: Tv },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/[0.08] bg-surface/95 backdrop-blur-xl lg:hidden"
      aria-label="Menú inferior"
    >
      <div className="flex justify-around px-1 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex min-w-[3.5rem] flex-col items-center gap-0.5 rounded-xl px-2 py-2 text-2xs font-semibold transition",
                active ? "text-brand-red" : "text-white/40"
              )}
            >
              <Icon className={cn("h-5 w-5", active && "drop-shadow-[0_0_8px_rgba(225,6,0,0.8)]")} strokeWidth={active ? 2.5 : 2} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
