import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-sm">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-1">
          {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-white/25" />}
          {item.href ? (
            <Link href={item.href} className="text-white/45 hover:text-brand-red">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-white/80">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
