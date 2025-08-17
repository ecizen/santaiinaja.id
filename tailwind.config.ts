// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        primary: '#6C4DF6',
        secondary: '#C74FEB',
        accent: '#FF6B9E',
        dark: '#1A1C2A',
        light: '#F9F9FF',
      },
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        linePulse: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(50px, -50px) rotate(180deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
      },
      animation: {
        'line-pulse': 'linePulse 4s infinite',
        'float': 'float 15s infinite linear',
      },
    },
  },
  plugins: [],
}

export default config
