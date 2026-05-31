import { cn } from "@/lib/utils";
import { getTeamColors } from "@/lib/data/team-colors";

const sizes = {
  sm: "h-8 w-8 text-[10px] rounded-lg",
  md: "h-10 w-10 text-xs rounded-xl",
  lg: "h-12 w-12 text-sm rounded-xl",
};

export function TeamBadge({
  slug,
  short,
  size = "md",
}: {
  slug: string;
  short: string;
  size?: "sm" | "md" | "lg";
}) {
  const colors = getTeamColors(slug);

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center font-bold text-white ring-1 ring-white/10",
        sizes[size]
      )}
      style={{
        background: `linear-gradient(145deg, ${colors.from}, ${colors.to})`,
      }}
      aria-hidden
    >
      {short}
    </div>
  );
}
