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
        midnight: "#0E1030",
        dusk: "#191C4A",
        twilight: "#2B2F6B",
        slate: "#5B5F8F",
        pearl: "#F6F4EF",
        linen: "#FFFDF9",
        mist: "#E7E3D9",
        orchid: "#9C6FC4",
        "orchid-dark": "#7B4FA6",
        moon: "#E3C77E",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
      letterSpacing: {
        wide3: "0.18em",
        wide4: "0.3em",
      },
      maxWidth: {
        shell: "1480px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        fadeUp: "fadeUp 600ms ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
