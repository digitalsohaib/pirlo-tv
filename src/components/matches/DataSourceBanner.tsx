import { Info, Radio } from "lucide-react";
import { getDataSourceLabel } from "@/lib/data/source";

export function DataSourceBanner() {
  const { mode, hint } = getDataSourceLabel();

  if (mode === "api") {
    return (
      <div className="flex items-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.08] px-3 py-2 text-xs text-emerald-200/90">
        <Radio className="h-3.5 w-3.5 shrink-0" />
        <span>{hint}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-3 py-2 text-xs text-amber-200/80">
      <Info className="h-3.5 w-3.5 shrink-0" />
      <span>{hint}</span>
    </div>
  );
}
