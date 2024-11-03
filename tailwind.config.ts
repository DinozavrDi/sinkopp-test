import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ["var(--font-inter-tight)", "sans-serif"],
        interItalic: ["var(--font-inter-tight-italic)", "sans-serif"],
        helvetica: ["var(--font-helvetica)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
