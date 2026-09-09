import type { Config } from "tailwindcss";

/**
 * Original palette for Shams Light: a near-black graphite base ("dusk")
 * carrying the header, footer and dark bands, a bright electric-blue
 * ("signal") for every primary action and link, and a warm sunbeam gold
 * ("sunbeam") reserved for the wordmark accent, ratings and small badges —
 * a nod to "Shams" (sun). No magenta, no navy-plus-lime, no teal/coral, no
 * cream/wine, no lavender — this graphite/electric-blue/sunbeam-gold trio
 * is this brand's alone among the storefronts.
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
        dusk: "#0E1420",
        "dusk-soft": "#1B2436",
        signal: "#2F6FED",
        "signal-dark": "#1E52C2",
        "signal-pale": "#E8F0FE",
        sunbeam: "#F5B942",
        "sunbeam-dark": "#D69A1F",
        paper: "#FFFFFF",
        ink: "#101521",
        "ink-soft": "#5B6478",
        mist: "#F3F5FA",
        line: "#E4E8F1",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.16em",
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 10px 30px rgba(14, 20, 32, 0.08)",
        lift: "0 20px 45px rgba(14, 20, 32, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
