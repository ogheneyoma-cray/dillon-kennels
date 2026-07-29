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
        cream: "#F6F1E9",
        paper: "#FBF8F2",
        ink: "#211C17",
        charcoal: "#332C24",
        rust: "#B7522E",
        "rust-dark": "#8F3D20",
        olive: "#6B6B47",
        sand: "#E4D8C3",
        clay: "#C98B5E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      maxWidth: {
        content: "1400px",
      },
    },
  },
  plugins: [],
};
export default config;
