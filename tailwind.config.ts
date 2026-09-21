import type { Config } from "tailwindcss";

/**
 * Original palette for this build: a deliberately minimal two-tone system —
 * warm near-black ink, a single saturated vermilion signal color, and a
 * warm ivory paper background. No blue, no amber/gold, no dark hero panel.
 * Layout language is an editorial magazine composition (a centered serif
 * headline over a full-bleed image, an asymmetric masonry service grid)
 * rather than a bento grid, numbered spec-sheet, or pill-capsule nav.
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
        ink: "#201C1A",
        "ink-soft": "#6B6259",
        signal: "#D6402A",
        "signal-dark": "#AB301A",
        "signal-pale": "#FBE6E0",
        paper: "#FBF8F4",
        stone: "#F1EAE0",
        line: "#E4DACD",
      },
      fontFamily: {
        display: ["var(--font-instrument)", "serif"],
        body: ["var(--font-hanken)", "sans-serif"],
      },
      maxWidth: {
        content: "1320px",
      },
      boxShadow: {
        tile: "0 6px 24px rgba(32, 28, 26, 0.08)",
        lift: "0 20px 40px rgba(32, 28, 26, 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
