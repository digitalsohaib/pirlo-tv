import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "live" | "league";
}) {
  const variants = {
    default: "bg-white/10 text-white/80",
    live: "live-badge",
    league: "bg-white/5 text-white/60 border border-white/10",
  };
  return (
    <span
      className={cn(
        "inline-flex rounded-md px-2 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
