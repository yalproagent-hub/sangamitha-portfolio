import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: { dark: '#050505', medium: '#0a0a0a', light: '#141414' },
        gold: { DEFAULT: '#e5c583', light: '#f2dfad', muted: 'rgba(229,197,131,0.2)' },
        cream: '#fafafa',
        text: { primary: '#fcfcfc', muted: '#a1a1aa' }
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shimmer: {
          '0%': { backgroundPositionX: '200%' },
          '100%': { backgroundPositionX: '-200%' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.8' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      },
      backdropBlur: {
        xs: '2px',
        xl: '24px',
      }
    },
  },
  plugins: [],
};
export default config;
