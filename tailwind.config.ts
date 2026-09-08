import type { Config } from "tailwindcss";

/**
 * Palette and structure lifted from the Amply "Home 2" reference: a near-
 * black navy base carrying the hero, the dotted "why us" band and the
 * footer, a glowing teal/cyan accent used the way the reference uses its
 * lime green, and a small amber highlight reserved for badges and single
 * accent dots. Light sections sit on a cool off-white rather than pure
 * white, echoing the reference's alternating dark/light bands.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F19",
        "ink-soft": "#161B2C",
        panel: "#131829",
        "panel-line": "#232A3D",
        teal: "#2FE0C4",
        "teal-dark": "#16B39B",
        "teal-pale": "#E4FBF6",
        amber: "#FFB238",
        "amber-dark": "#DB8F1B",
        mist: "#F5F7FA",
        cloud: "#EBEEF3",
        slate: "#4A5568",
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.14em",
      },
      maxWidth: {
        content: "1320px",
      },
      boxShadow: {
        tile: "0 6px 24px rgba(11, 15, 25, 0.08)",
        lift: "0 20px 44px rgba(11, 15, 25, 0.35)",
        glow: "0 0 0 1px rgba(47, 224, 196, 0.25), 0 18px 40px rgba(47, 224, 196, 0.12)",
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(47,224,196,0.16) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "22px 22px",
      },
    },
  },
  plugins: [],
};
export default config;
