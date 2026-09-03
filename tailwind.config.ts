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
        cream: "#F5EFE4",
        ink: "#1B1B1A",
        "ink-soft": "#5E5B54",
        navy: "#12294B",
        "navy-deep": "#0B1B33",
        "navy-soft": "#1E3A63",
        rust: "#C1622B",
        "rust-dark": "#984A1E",
        "rust-pale": "#FBE7D8",
        sand: "#E9E1D2",
        line: "#E3DCCC",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1400px",
      },
      boxShadow: {
        tile: "0 1px 2px rgba(18, 41, 75, 0.08)",
        lift: "0 20px 45px -20px rgba(11, 27, 51, 0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
