import type { Config } from "tailwindcss";

/**
 * Palette lifted from the Coze reference: a near-black nav/footer, a violet
 * primary accent, an amber-to-lime gradient reserved for call-to-action
 * buttons, and a pink/blue pair used only for decorative shapes. Page bands
 * sit on a pale lavender-white rather than pure white.
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
        ink: "#0B0B14",
        "ink-deep": "#000000",
        clay: "#7C3AED",
        "clay-dark": "#5B21B6",
        rust: "#7C3AED",
        "rust-dark": "#5B21B6",
        rose: "#EC4899",
        amber: "#FFC93C",
        lime: "#C6E94B",
        blue: "#4C5FE0",
        olive: "#22C55E",
        cream: "#FAF9FE",
        sand: "#F1EEFC",
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.14em",
      },
      maxWidth: {
        content: "1320px",
      },
      boxShadow: {
        tile: "0 6px 26px rgba(11, 11, 20, 0.08)",
        lift: "0 16px 40px rgba(11, 11, 20, 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
