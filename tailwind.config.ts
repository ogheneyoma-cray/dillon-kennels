import type { Config } from "tailwindcss";

/**
 * Palette and layout lifted from the Bookworm "Home v3" reference: a deep
 * navy carrying every heading, nav and button, a bold sunflower yellow
 * reserved for call-to-action backgrounds, badges and star ratings, and a
 * soft blush pink used the way the reference uses its pale pink promo
 * bands. Accent text (prices, eyebrows, links) stays navy rather than
 * yellow so it keeps working on a white page — yellow is a background and
 * icon color only.
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
        ink: "#0B1F3A",
        "ink-soft": "#13294F",
        paper: "#FFFFFF",
        cream: "#FFF8F4",
        blush: "#FDEEF0",
        rose: "#D14D72",
        gold: "#F7D046",
        "gold-dark": "#E0B816",
        moss: "#2F8F5B",
        sand: "#EDEFF3",
      },
      fontFamily: {
        display: ["var(--font-lora)", "serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.18em",
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 6px 24px rgba(11, 31, 58, 0.1)",
        lift: "0 20px 44px rgba(11, 31, 58, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
