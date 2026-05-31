import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Programación de Hoy | Pirlo TV Calendario",
  "Partidos de hoy agrupados por hora. Filtros por liga y deporte.",
  "/schedule/hoy"
);

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
