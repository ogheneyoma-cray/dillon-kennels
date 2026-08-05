import type { Config } from "tailwindcss";

/**
 * Palette sampled from the Dark Fashion reference: a true-black page, warm
 * near-black panels, bone-white type and a single brass accent. Every surface
 * in this build is one of these values — there is no second accent colour.
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
        ink: "#000000",
        pitch: "#080807",
        panel: "#14120F",
        raised: "#1E1B17",
        brass: "#BB9D7B",
        "brass-deep": "#96795A",
        "brass-glow": "#D8BE9E",
        bone: "#F0F0F0",
        smoke: "#A7A099",
        slate: "#6B655E",
        rule: "#2A2521",
      },
      fontFamily: {
        display: ["var(--font-jost)", "sans-serif"],
      },
      letterSpacing: {
        micro: "0.18em",
        mega: "0.3em",
      },
      maxWidth: {
        shell: "1320px",
        column: "760px",
      },
      keyframes: {
        lift: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        lift: "lift 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        drift: "drift 42s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
