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
        linen: "#F3F5FC",
        ink: "#12162B",
        "ink-soft": "#5B6178",
        navy: "#0B1330",
        "navy-soft": "#161F45",
        indigo: "#4F5FF2",
        "indigo-dark": "#3644C4",
        "indigo-pale": "#E9EBFC",
        gold: "#F5A623",
        "gold-dark": "#C9820E",
        line: "#E4E7F5",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 1px 2px rgba(22, 19, 17, 0.06)",
        lift: "0 20px 45px -20px rgba(22, 19, 17, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
