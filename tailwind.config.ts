import type { Config } from "tailwindcss";

/**
 * Original palette for this build: true black and white carrying every
 * surface, with a single neon "terminal green" as the only accent colour —
 * no second hue anywhere on the site. Paired with a monospace display face
 * (developer/terminal identity) and a code-editor-window motif in the hero
 * and product cards. No blue, no gold, no magenta/navy, no lavender — this
 * black/white/neon-green single-accent system, plus the terminal-window
 * layout language, is this brand's alone among the storefronts.
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
        void: "#0A0B0D",
        "void-soft": "#16181C",
        term: "#22E584",
        "term-dark": "#17B568",
        "term-pale": "#E8FCF1",
        paper: "#FFFFFF",
        ink: "#0F1113",
        "ink-soft": "#5C6269",
        mist: "#F4F5F7",
        line: "#E4E6EA",
      },
      fontFamily: {
        display: ["var(--font-jetbrains)", "monospace"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.16em",
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 10px 30px rgba(10, 11, 13, 0.08)",
        lift: "0 20px 45px rgba(10, 11, 13, 0.2)",
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
      },
      backgroundSize: {
        dots: "22px 22px",
      },
    },
  },
  plugins: [],
};
export default config;
