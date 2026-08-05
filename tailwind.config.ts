import type { Config } from "tailwindcss";

/**
 * Palette lifted from the Ebukz reference's own CSS custom properties: a clay
 * theme colour over a warm blush page, deep slate for headings, dusty rose as
 * the secondary, and a sand tone for the alternating bands.
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
        clay: "#D16655",
        "clay-deep": "#A8483A",
        "clay-soft": "#E08B7C",
        rose: "#BD7579",
        slate: "#2E4A5B",
        "slate-deep": "#1E323E",
        ink: "#20303A",
        body: "#505050",
        muted: "#7C8891",
        blush: "#F8EBE5",
        sand: "#F3ECDC",
        cream: "#FBF6EE",
        paper: "#FFFFFF",
        line: "#E6DDD3",
        "line-soft": "#EFE6DC",
        gold: "#C9A227",
        moss: "#5F7A63",
      },
      fontFamily: {
        display: ["var(--font-josefin)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      letterSpacing: {
        wide2: "0.1em",
        wide3: "0.18em",
      },
      maxWidth: {
        shell: "1290px",
        column: "760px",
      },
      borderRadius: {
        pill: "40px",
      },
      boxShadow: {
        jacket: "0 14px 34px rgba(46, 74, 91, 0.18)",
        card: "0 6px 26px rgba(46, 74, 91, 0.09)",
        lift: "0 16px 44px rgba(46, 74, 91, 0.16)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        spinslow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rise: "rise 650ms cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 6s ease-in-out infinite",
        spinslow: "spinslow 26s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
