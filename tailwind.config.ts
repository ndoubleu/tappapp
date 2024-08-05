import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura Md BT', 'sans-serif'],
      },
      fontSize: {
        '4xl': '40px',
        '3xl': '32px',
      },
      fontWeight: {

      },
      lineHeight: {
        '4xl': '44px',
        '3xl': '36px',
      },
      colors: {
        background: '#111111',
        block: '#1B1B1B',
        blockActive: '#323232',
        primary: '#2FEAB2',
        secondary: '#1E3C3A'
      }
    },
  },
  plugins: [],
};
export default config;
