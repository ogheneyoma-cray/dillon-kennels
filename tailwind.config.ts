import type { Config } from "tailwindcss";

/**
 * Original palette for this build: deep navy-ink text on a cool "fog" white,
 * with electric cobalt blue as the sole primary and a warm coral-red
 * "flare" as the only secondary accent — no gold, no violet, no green as a
 * dominant hue. Paired with a geometric tech display face (Space Grotesk)
 * and an asymmetric "signal" motif throughout layout (diagonal cuts,
 * dashboard cards, connecting pulse-lines) instead of mosaics or terminal
 * windows used elsewhere.
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
        ink: "#0B1220",
        "ink-soft": "#4C5877",
        cobalt: "#2451C4",
        "cobalt-dark": "#1B3D99",
        "cobalt-pale": "#E7EEFD",
        flare: "#FF5470",
        "flare-dark": "#E13655",
        "flare-pale": "#FFE9EC",
        mint: "#1FAE6B",
        paper: "#FFFFFF",
        fog: "#F4F6FB",
        cloud: "#E9EDF6",
        line: "#DCE2F0",
      },
      fontFamily: {
        display: ["var(--font-grotesk)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.14em",
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 4px 20px rgba(11, 18, 32, 0.06)",
        lift: "0 16px 40px rgba(11, 18, 32, 0.14)",
        signal: "0 0 0 3px rgba(36, 81, 196, 0.12)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
