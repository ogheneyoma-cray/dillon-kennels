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
        pine: "#143B32",
        forest: "#1E5347",
        tangerine: "#F2703A",
        "tangerine-dark": "#D2551F",
        lagoon: "#2AA198",
        sunshine: "#FFC94A",
        bubble: "#FF8FA3",
        canvas: "#FFF8F0",
        shell: "#F3E9DC",
        mudd: "#4A5B56",
      },
      fontFamily: {
        display: ["var(--font-baloo)", "cursive"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
      letterSpacing: {
        mega: "0.35em",
        bold3: "0.2em",
      },
      maxWidth: {
        box: "1200px",
      },
      boxShadow: {
        panel: "0 2px 24px rgba(20, 59, 50, 0.07)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        floaty: "floaty 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
