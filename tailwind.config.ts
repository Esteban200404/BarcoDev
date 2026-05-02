import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-primary': '#8b5cf6',
        'purple-dark': '#7c3aed',
        'purple-light': '#c4b5fd',
        'black-primary': '#1a1a1a',
        'black-secondary': '#2d2d2d',
        'black-light': '#3f3f3f',
        'gray-medium': '#e0e0e0',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideInFromTop 0.3s ease-out',
        'float': 'floatUp 3s ease-in-out infinite',
        'glow-pulse': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInFromTop: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backdropBlur: {
        md: '12px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(139, 92, 246, 0.3)',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}

export default config
