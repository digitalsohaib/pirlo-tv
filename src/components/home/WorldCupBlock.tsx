import Link from "next/link";
import { Card } from "@/components/ui/card";

export function WorldCupBlock() {
  return (
    <Card className="relative overflow-hidden border-brand-red/30 bg-gradient-to-br from-brand-red/20 to-transparent p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-brand-red">
        FIFA World Cup 2026
      </p>
      <h2 className="mt-2 text-2xl font-bold">Mundial en USA, México y Canadá</h2>
      <p className="mt-2 text-sm text-white/60">
        Sedes, grupos, calendario y análisis. Tu hub Pirlo TV para el torneo más grande del planeta.
      </p>
      <Link
        href="/mundial-2026"
        className="mt-4 inline-flex h-8 items-center rounded-lg bg-brand-red px-4 text-sm font-semibold text-white hover:bg-brand-red-dark"
      >
        Explorar hub
      </Link>
    </Card>
  );
}
