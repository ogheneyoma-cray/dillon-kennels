import type { Config } from "tailwindcss";

/**
 * Palette and layout language lifted from the Digicours reference: a soft
 * lavender page, diagonal sage-green and indigo colour blocks behind the
 * hero, a mint-green band for the "why us" section, and a near-black navy
 * for text, nav and the dotted-grid footer. No gold, no wine, no camel — the
 * cool lavender/indigo/sage trio is this brand's alone.
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
        ink: "#13122B",
        "ink-soft": "#514F72",
        indigo: "#4C3FA0",
        "indigo-dark": "#372E78",
        "indigo-pale": "#EDEAFB",
        sage: "#4E9A70",
        "sage-dark": "#37784F",
        "sage-pale": "#E4F6EB",
        mint: "#E9FBF1",
        lavender: "#F5F3FC",
        paper: "#FFFFFF",
        line: "#E3E0F1",
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
        tile: "0 10px 30px rgba(19, 18, 43, 0.08)",
        lift: "0 20px 45px rgba(19, 18, 43, 0.16)",
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(245,243,252,0.14) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "28px 28px",
      },
    },
  },
  plugins: [],
};
export default config;
