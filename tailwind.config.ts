import type { Config } from "tailwindcss";

/**
 * Palette and layout language lifted from the Coursely reference: a vivid
 * magenta hero with a diagonal light-ray gradient, a deep navy for
 * secondary panels/buttons/footer, and a lime-green accent reserved for
 * "+" marks, badges and small highlights. No lavender, no wine, no camel —
 * this magenta/navy/lime trio is this brand's alone among the storefronts.
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
        magenta: "#A8408A",
        "magenta-dark": "#7D2E68",
        "magenta-light": "#C063A5",
        "magenta-pale": "#FBEEF7",
        navy: "#1B1A3B",
        "navy-soft": "#4B4A6E",
        lime: "#8FBF3F",
        "lime-dark": "#6B9A2A",
        blush: "#F8E9F2",
        paper: "#FFFFFF",
        ink: "#1B1A3B",
        "ink-soft": "#615F80",
        line: "#E7E3EE",
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "sans-serif"],
        body: ["var(--font-rubik)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.16em",
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 10px 30px rgba(27, 26, 59, 0.08)",
        lift: "0 20px 45px rgba(27, 26, 59, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
