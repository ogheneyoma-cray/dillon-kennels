import type { Config } from "tailwindcss";

/**
 * Palette sampled directly from the Lynessa reference: a camel accent on a
 * white base with a near-black display colour and a ladder of neutral greys.
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
        camel: "#CF9163",
        "camel-dark": "#B4744A",
        blush: "#F6EAE2",
        onyx: "#0E0E0E",
        graphite: "#222222",
        ash: "#666666",
        mist: "#999999",
        haze: "#F5F5F5",
        line: "#E6E6E6",
        paper: "#FFFFFF",
      },
      fontFamily: {
        script: ["var(--font-kaushan)", "cursive"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      letterSpacing: {
        wide2: "0.14em",
        wide3: "0.24em",
      },
      maxWidth: {
        frame: "1140px",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 600ms ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
