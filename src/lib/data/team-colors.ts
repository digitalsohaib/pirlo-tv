/** Brand-style colors for team badges (no external image CDN required) */
export const teamColors: Record<string, { from: string; to: string }> = {
  "real-madrid": { from: "#FEBE10", to: "#3D3D3D" },
  "fc-barcelona": { from: "#A50044", to: "#004D98" },
  "atletico-de-madrid": { from: "#CB3524", to: "#272e61" },
  "manchester-city": { from: "#6CABDD", to: "#1C2C5B" },
  arsenal: { from: "#EF0107", to: "#023474" },
  liverpool: { from: "#C8102E", to: "#00B2A9" },
  chelsea: { from: "#034694", to: "#034694" },
  "crystal-palace": { from: "#1B458F", to: "#C4122E" },
  "aston-villa": { from: "#95BFE5", to: "#670E36" },
  "boca-juniors": { from: "#003DA5", to: "#F4C430" },
  "river-plate": { from: "#ED1A2E", to: "#FFFFFF" },
  flamengo: { from: "#C52613", to: "#000000" },
  palmeiras: { from: "#006437", to: "#006437" },
  america: { from: "#F7B500", to: "#1E3A8A" },
  chivas: { from: "#C8102E", to: "#FFFFFF" },
  "inter-de-milan": { from: "#010E80", to: "#000000" },
  napoli: { from: "#12A0D7", to: "#1C2C5B" },
  "bayern-munich": { from: "#DC052D", to: "#0066B2" },
  psg: { from: "#004170", to: "#DA291C" },
  "sporting-cristal": { from: "#00BFFF", to: "#FFFFFF" },
};

export function getTeamColors(slug: string) {
  return teamColors[slug] ?? { from: "#E10600", to: "#1a1a1a" };
}
