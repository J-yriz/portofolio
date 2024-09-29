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
        "huntBlack": "#222831",
        "huntGray": "#31363F",
        "huntCyan": "#76ABAE",
        "huntWhite": "#EEEEEE",
      },
    },
  },
  plugins: [],
};
export default config;
