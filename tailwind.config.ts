import type { Config } from "tailwindcss";

/**
 * Original palette for this build: deep graphite/ink base with an electric
 * blue + amber duo accent on a cool porcelain background — a "systems
 * console" feel, not catalog/editorial. Layout language is a bento-grid of
 * service tiles, pill-shaped nav/filters and a diagonal-cut hero panel,
 * instead of numbered spec-sheet rows or swing-tag cards.
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
        ink: "#12181F",
        "ink-soft": "#5B6673",
        volt: "#2F6FED",
        "volt-dark": "#1E4FC0",
        "volt-pale": "#E4ECFE",
        amber: "#F2A93B",
        porcelain: "#F4F6F9",
        paper: "#FFFFFF",
        line: "#E1E6EC",
      },
      fontFamily: {
        display: ["var(--font-spacegrotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1320px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        tile: "0 6px 24px rgba(18, 24, 31, 0.08)",
        lift: "0 20px 40px rgba(18, 24, 31, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
