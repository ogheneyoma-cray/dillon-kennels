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
        ivory: "#FAF6F3",
        paper: "#FFFFFF",
        ink: "#1B1A1D",
        plum: "#3A1E36",
        "plum-dark": "#26141F",
        rose: "#C6316B",
        "rose-dark": "#9E2154",
        blush: "#F3DCE1",
        sable: "#D8C3C9",
        gold: "#B08D57",
      },
      fontFamily: {
        display: ["var(--font-italiana)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.4em",
      },
      maxWidth: {
        content: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
