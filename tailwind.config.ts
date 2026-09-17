import type { Config } from "tailwindcss";

/**
 * Original palette for this build: deep aubergine as the dominant tone
 * (not a secondary accent like other builds use purple/plum), paired with
 * a single warm peach highlight and an oat-cream background — no rust, no
 * rose-red, no navy anywhere. Editorial magazine layout language (oversized
 * serif display type, overlapping hero image/text, asymmetric masonry
 * product grid) instead of card-grid or dashboard patterns used elsewhere.
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
        aubergine: "#3D2436",
        "aubergine-dark": "#2A1826",
        "aubergine-pale": "#F1E6EC",
        peach: "#E8A57C",
        "peach-dark": "#CF8459",
        oat: "#FAF4EC",
        paper: "#FFFFFF",
        ink: "#2A2026",
        "ink-soft": "#7A6B72",
        line: "#E7DDD3",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 6px 24px rgba(42, 24, 38, 0.08)",
        lift: "0 18px 40px rgba(42, 24, 38, 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
