import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0505',
        'dark-secondary': '#110a0a',
        'dark-tertiary': '#1a0f0f',
        'noble-gold': '#d4af37',
        'noble-gold-dark': '#b8941e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(220, 38, 38, 0.4), 0 0 40px rgba(220, 38, 38, 0.2)',
        'red-glow-lg': '0 0 30px rgba(220, 38, 38, 0.5), 0 0 60px rgba(220, 38, 38, 0.3)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.4)',
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(to right, #7f1d1d, #dc2626, #ef4444)',
        'red-gradient-vertical': 'linear-gradient(to bottom, #7f1d1d, #dc2626, #ef4444)',
        'dark-texture': 'radial-gradient(circle at 2px 2px, rgba(220, 38, 38, 0.03) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}
export default config

