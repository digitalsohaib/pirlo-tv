import Link from "next/link";
import { getDataSourceMode } from "@/lib/data/source";

export function SiteFooter() {
  const isLiveApi = getDataSourceMode() === "api";

  return (
    <footer className="mt-auto border-t border-white/[0.06] bg-surface-raised py-10">
      <div className="container-app text-center">
        <p className="text-base font-bold">
          Pirlo<span className="text-brand-red">TV</span> Fútbol
        </p>
        <p className="mt-1 text-sm text-white/40">Información deportiva legal</p>
        <div className="mt-5 flex flex-wrap justify-center gap-6 text-sm text-white/50">
          <Link href="/schedule/hoy" className="hover:text-brand-red">
            Calendario
          </Link>
          <Link href="/alternativas" className="hover:text-brand-red">
            Alternativas
          </Link>
          <Link href="/mundial-2026" className="hover:text-brand-red">
            Mundial 2026
          </Link>
        </div>
        {isLiveApi && (
          <p className="mx-auto mt-6 max-w-md text-2xs leading-relaxed text-white/30">
            Marcadores en tiempo real vía API-Football (plan gratuito). Actualización aproximada cada 2 minutos.
          </p>
        )}
        <p className="mt-4 text-2xs text-white/25">
          © {new Date().getFullYear()} pirlotvfutbol.com
        </p>
      </div>
    </footer>
  );
}
