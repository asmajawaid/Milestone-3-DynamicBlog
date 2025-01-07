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
      dbrown: '#5D3A1A', //dark brown
			bagie: '#F5F5DC',
			lPink : '#E8D8B0',
			lPinkPurple : 'D1C6A4',
			lBrown : '#C2B280',
			dPink : '#BFAF8D',
			lRose : '#D9CBAE',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
