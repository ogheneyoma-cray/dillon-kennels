import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        stone: "#F4F3EF",
        ink: "#1B1B18",
        "ink-soft": "#5B5A54",
        spruce: "#2A5F48",
        "spruce-dark": "#1D4433",
        "spruce-pale": "#E5EEE8",
        mustard: "#C99A3A",
        "mustard-dark": "#A87B24",
        "mustard-pale": "#F6ECD6",
        line: "#E3E1DC",
      },
      fontFamily: {
        display: ["var(--font-barlow-condensed)", "sans-serif"],
        body: ["var(--font-barlow)", "sans-serif"],
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 1px 2px rgba(27, 27, 24, 0.06)",
        lift: "0 20px 45px -20px rgba(27, 27, 24, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
