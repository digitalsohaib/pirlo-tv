import Image from "next/image";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  size?: number;
  className?: string;
  showLabel?: boolean;
};

export function SiteLogo({ size = 36, className, showLabel = false }: SiteLogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/logo.png"
        alt="Pirlo TV Fútbol"
        width={size}
        height={size}
        className="rounded-xl object-contain"
        priority
      />
      {showLabel ? (
        <span className="text-lg font-extrabold tracking-tight">
          Pirlo<span className="text-brand-red">TV</span>
        </span>
      ) : null}
    </span>
  );
}
