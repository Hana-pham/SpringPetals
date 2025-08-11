import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF7F3',
        'light-pink': '#FFDCE6',
        'dark-pink': '#D9487D',
        'dark-grey': '#3F3F46',
      },
      backgroundImage: {
        strawberry: 'linear-gradient(90deg,#ff80ab,#ff9ec5,#ff80ab)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradient: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'gradient-flow': 'gradient 8s ease infinite',
      },
    },
  },
  plugins: [],
};

export default config;
