import Link from "next/link";
import { Calendar, Radio, Shield, Tv } from "lucide-react";
import { leagues } from "@/lib/data/leagues";

const quickLinks = [
  { href: "/resultados", label: "Resultados", icon: Radio },
  { href: "/schedule/hoy", label: "Calendario", icon: Calendar },
  { href: "/canales", label: "Canales TV", icon: Tv },
  { href: "/mundial-2026", label: "Mundial 2026", icon: Shield },
];

export function HomeSidebar({ liveCount }: { liveCount: number }) {
  const topLeagues = leagues.filter((l) => l.sport === "futbol").slice(0, 6);

  return (
    <aside className="space-y-4">
      <div className="card p-4">
        <p className="text-2xs font-bold uppercase tracking-wider text-white/35">Ahora</p>
        <p className="mt-2 text-3xl font-black text-brand-red">{liveCount}</p>
        <p className="text-sm text-white/50">partidos en directo</p>
        <Link href="/resultados" className="btn-primary mt-4 w-full !text-xs">
          Ver marcadores
        </Link>
      </div>

      <div className="card p-4">
        <p className="mb-3 text-2xs font-bold uppercase tracking-wider text-white/35">
          Acceso rápido
        </p>
        <ul className="space-y-1">
          {quickLinks.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white"
              >
                <Icon className="h-4 w-4 text-brand-red/80" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-4">
        <p className="mb-3 text-2xs font-bold uppercase tracking-wider text-white/35">
          Ligas
        </p>
        <ul className="space-y-0.5">
          {topLeagues.map((l) => (
            <li key={l.id}>
              <Link
                href={`/league/${l.slug}`}
                className="block truncate rounded-lg px-3 py-2 text-sm text-white/60 hover:bg-white/[0.05] hover:text-brand-red"
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/ligas" className="mt-2 block px-3 text-2xs font-semibold text-brand-red">
          Ver todas →
        </Link>
      </div>
    </aside>
  );
}
