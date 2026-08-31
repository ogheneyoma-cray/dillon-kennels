import type { Config } from "tailwindcss";

/**
 * Palette and editorial layout lifted from the Séva beauty reference: a
 * warm ivory page, an espresso-brown ink (not pure black), and a terracotta
 * clay accent for CTAs and prices — with a muted sage green added as a
 * second accent for ingredient/values callouts, which the reference
 * doesn't use. This warm-clay-plus-sage combination is this brand's alone
 * among the storefronts.
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
        ivory: "#FBF6EE",
        paper: "#FFFFFF",
        sand: "#F1E6D8",
        ink: "#2B211B",
        "ink-soft": "#6B5F54",
        clay: "#C1704A",
        "clay-dark": "#9A5636",
        "clay-pale": "#F3E1D6",
        sage: "#6B7C5E",
        "sage-dark": "#4F5D45",
        "sage-pale": "#E9EEE3",
        blush: "#EFDCD3",
        line: "#E6DACB",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.18em",
      },
      maxWidth: {
        content: "1320px",
      },
      boxShadow: {
        tile: "0 10px 28px rgba(43, 33, 27, 0.08)",
        lift: "0 20px 42px rgba(43, 33, 27, 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
