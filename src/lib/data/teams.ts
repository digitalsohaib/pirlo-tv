import type { Team } from "@/types/sports";
import { slugify } from "@/lib/utils";

function team(
  name: string,
  shortName: string,
  country: string
): Team {
  return {
    id: slugify(name),
    name,
    slug: slugify(name),
    shortName,
    country,
  };
}

export const teams: Team[] = [
  team("Real Madrid", "RMA", "España"),
  team("FC Barcelona", "BAR", "España"),
  team("Atlético de Madrid", "ATM", "España"),
  team("Manchester City", "MCI", "Inglaterra"),
  team("Arsenal", "ARS", "Inglaterra"),
  team("Liverpool", "LIV", "Inglaterra"),
  team("Chelsea", "CHE", "Inglaterra"),
  team("Crystal Palace", "CRY", "Inglaterra"),
  team("Aston Villa", "AVL", "Inglaterra"),
  team("Boca Juniors", "BOC", "Argentina"),
  team("River Plate", "RIV", "Argentina"),
  team("Flamengo", "FLA", "Brasil"),
  team("Palmeiras", "PAL", "Brasil"),
  team("América", "AME", "México"),
  team("Chivas", "CHI", "México"),
  team("Inter de Milán", "INT", "Italia"),
  team("Napoli", "NAP", "Italia"),
  team("Bayern Múnich", "BAY", "Alemania"),
  team("PSG", "PSG", "Francia"),
  team("Sporting Cristal", "CRI", "Perú"),
];

export function getTeamBySlug(slug: string): Team | undefined {
  return teams.find((t) => t.slug === slug);
}
