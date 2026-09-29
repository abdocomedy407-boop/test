import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { primary: { DEFAULT: "#0d9488", dark: "#0f766e", soft: "#ccfbf1" } },
    fontFamily: { sans: ["Tajawal", "Tahoma", "sans-serif"] }
  }},
  plugins: []
};
export default config;
