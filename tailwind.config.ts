import type { Config } from "tailwindcss";

/**
 * Original palette for this build: near-black ink and warm off-white paired
 * with a single high-visibility "optic" yellow as the only accent — no
 * blue, no purple, no pink anywhere. This black/yellow duo is used as the
 * PRIMARY system (not a secondary highlight like other builds use amber),
 * combined with a "ticket stub" card motif (dashed perforation + notches)
 * and a zig-zag process layout not used elsewhere.
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
        ink: "#15130D",
        "ink-soft": "#615A4A",
        optic: "#FFD400",
        "optic-dark": "#E0B800",
        "optic-pale": "#FFF6D1",
        cream: "#FAF6EC",
        paper: "#FFFFFF",
        line: "#E7E0CC",
        signal: "#D64541",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-ibm)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.18em",
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 4px 20px rgba(21, 19, 13, 0.08)",
        lift: "0 16px 36px rgba(21, 19, 13, 0.16)",
        stub: "6px 6px 0 0 #15130D",
      },
    },
  },
  plugins: [],
};
export default config;
