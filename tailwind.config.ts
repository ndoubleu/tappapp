import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
        blockLighter: '#3D3D3D',
        primary: '#2FEAB2',
        secondary: '#1E3C3A'
      },
      keyframes: {
        flyUp: {
          '0%': { transform: 'translateY(-10px)', opacity: '1' },
          '100%': { transform: 'translateY(-70px)', opacity: '0' },
        },
      },
      animation: {
        flyUp: 'flyUp 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
