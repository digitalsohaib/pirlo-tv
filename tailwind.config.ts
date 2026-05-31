import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0c0c0c",
          raised: "#141414",
          overlay: "#1a1a1a",
          hover: "#222222",
        },
        brand: {
          red: "#E10600",
          "red-dark": "#B80500",
          "red-soft": "rgba(225, 6, 0, 0.12)",
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.45)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.55)",
        glow: "0 0 24px rgba(225, 6, 0, 0.35)",
        "glow-sm": "0 0 12px rgba(225, 6, 0, 0.25)",
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(ellipse 80% 60% at 10% 0%, rgba(225,6,0,0.22), transparent 50%), radial-gradient(ellipse 60% 40% at 90% 10%, rgba(225,6,0,0.08), transparent 45%), linear-gradient(180deg, #121212 0%, #0c0c0c 100%)",
        "live-row":
          "linear-gradient(90deg, rgba(225,6,0,0.14) 0%, rgba(20,20,20,0.95) 28%, #141414 100%)",
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
      },
      animation: {
        "pulse-live": "pulse-live 2s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-live": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
