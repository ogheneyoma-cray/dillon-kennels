import type { Config } from "tailwindcss";

/**
 * Palette sampled from the James reference: a white page laid over pale grey
 * bands, a rose-red accent carrying every call to action, and an amber used
 * only for star rows and countdown digits. Headings sit near-black, body copy
 * at a mid grey.
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
        rose: "#E03550",
        "rose-lit": "#F25862",
        "rose-deep": "#C4213C",
        amber: "#FFB21E",
        ink: "#2B2B2B",
        graphite: "#3E3E3E",
        body: "#6A6A6A",
        muted: "#959595",
        faint: "#B4B4B4",
        line: "#E6E6E6",
        "line-firm": "#CECECE",
        mist: "#F5F5F5",
        cloud: "#F2F2F2",
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
        script: ["var(--font-norican)", "cursive"],
      },
      letterSpacing: {
        wide2: "0.12em",
        wide3: "0.2em",
      },
      maxWidth: {
        shell: "1200px",
        column: "760px",
      },
      boxShadow: {
        tile: "0 2px 20px rgba(43, 43, 43, 0.07)",
        lift: "0 10px 34px rgba(43, 43, 43, 0.12)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slidein: {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        rise: "rise 650ms cubic-bezier(0.22, 1, 0.36, 1) both",
        slidein: "slidein 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
