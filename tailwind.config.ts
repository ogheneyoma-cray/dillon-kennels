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
        indigo: "#1B1464",
        "indigo-light": "#2D2180",
        violet: "#7C3AED",
        "violet-dark": "#6025D1",
        "violet-pale": "#EDE9FE",
        gold: "#F59E0B",
        "gold-dark": "#D97706",
        paper: "#FFFFFF",
        ink: "#1E1B3A",
        "ink-soft": "#6B7194",
        line: "#E2E0EF",
        lavender: "#F5F3FF",
        smoke: "#FAFAFE",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.16em",
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 4px 24px rgba(27, 20, 100, 0.07)",
        lift: "0 12px 40px rgba(27, 20, 100, 0.14)",
        glow: "0 0 30px rgba(124, 58, 237, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
