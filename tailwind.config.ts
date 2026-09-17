import type { Config } from "tailwindcss";

/**
 * Original palette for this build: slate-charcoal ink paired with a warm
 * caramel accent on a linen background — a "catalog" system, not an
 * editorial or dashboard one. No violet, no aubergine, no black/yellow
 * duo. Layout language is a numbered spec-sheet / shelf-list aesthetic
 * (rows with running indices, swing-tag product cards, a table-of-
 * contents-style category list) instead of cards, mosaics or tickets.
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
        ink: "#23303A",
        "ink-soft": "#66727A",
        clay: "#C97B4A",
        "clay-dark": "#A8602F",
        "clay-pale": "#F3E2D1",
        sage: "#7C8B6F",
        linen: "#F6F1E7",
        paper: "#FFFFFF",
        line: "#E4DCC9",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        body: ["var(--font-publicsans)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.16em",
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 4px 20px rgba(35, 48, 58, 0.08)",
        lift: "0 16px 36px rgba(35, 48, 58, 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
