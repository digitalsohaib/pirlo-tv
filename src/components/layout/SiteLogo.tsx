import { cn } from "@/lib/utils";

type SiteLogoProps = {
  size?: number;
  className?: string;
  showLabel?: boolean;
};

export function SiteLogo({ size = 44, className, showLabel = false }: SiteLogoProps) {
  const iconSize = Math.round(size * 0.88);

  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        className="flex shrink-0 items-center justify-center rounded-xl bg-brand-red shadow-glow-sm ring-2 ring-white/10"
        style={{ width: size, height: size }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.svg"
          alt="Pirlo TV Fútbol"
          width={iconSize}
          height={iconSize}
          className="rounded-lg"
          draggable={false}
        />
      </span>
      {showLabel ? (
        <span className="text-lg font-extrabold tracking-tight sm:text-xl">
          Pirlo<span className="text-brand-red">TV</span>
        </span>
      ) : null}
    </span>
  );
}
