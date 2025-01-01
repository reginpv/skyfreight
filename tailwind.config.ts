import fluid, { extract } from 'fluid-tailwind'
import type { Config } from "tailwindcss"

const config: Config = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#044B99",
        secondary: "#2F8CDC",
        body: "#333333",
        dark: "#333333",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        custom: "1520px"
      }
    },
  },
  plugins: [
    fluid,
    
  ],
};
export default config;
