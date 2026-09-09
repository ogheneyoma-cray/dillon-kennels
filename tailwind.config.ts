import type { Config } from "tailwindcss";

/**
 * Original palette for Cyber Travellers: a departure-board identity — a
 * deep petrol-teal-black ("gate") carrying the header, footer and board
 * surfaces, a glowing amber ("beacon") for every primary action, price and
 * "boarding" status, and a cool mint ("radar") reserved for secondary
 * highlights and confirmation states. No navy, no violet/lavender, no
 * wine/rose, no gold-on-cream, no black-plus-neon-green, no silver/fuchsia
 * — this petrol/amber/mint trio, paired with the flip-board and boarding-
 * pass layout below, is this brand's alone among the storefronts.
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
        gate: "#0D1F1E",
        "gate-soft": "#173634",
        beacon: "#FFA630",
        "beacon-dark": "#DB8412",
        "beacon-pale": "#FFF1DE",
        radar: "#4DE8C2",
        "radar-dark": "#22B896",
        paper: "#FFFFFF",
        ink: "#101817",
        "ink-soft": "#5E6C6A",
        line: "#E1E8E6",
        mist: "#F2F6F5",
      },
      fontFamily: {
        display: ["var(--font-space-mono)", "monospace"],
        body: ["var(--font-mulish)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.16em",
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 10px 30px rgba(13, 31, 30, 0.08)",
        lift: "0 20px 45px rgba(13, 31, 30, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
