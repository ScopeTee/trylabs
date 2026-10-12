/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1a1916',
          soft: '#3d3a35',
          muted: '#6b6862',
          light: '#9c9892',
          faint: '#c4c0b9',
        },
        paper: {
          DEFAULT: '#faf9f6',
          warm: '#f4f1eb',
          deep: '#ece8e1',
          card: '#ffffff',
        },
        line: {
          DEFAULT: '#e6e2db',
          soft: '#f0ede7',
          strong: '#d4cfc6',
        },
        accent: {
          DEFAULT: '#4a5d52',
          hover: '#3a4d42',
          soft: '#eef2f0',
          light: '#d8e0db',
        },
        success: {
          DEFAULT: '#2d6a4f',
          soft: '#e8f5ee',
        },
        error: {
          DEFAULT: '#9d2b2b',
          soft: '#fceeee',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1200px',
        reading: '720px',
        wide: '1360px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'line-grow': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        'line-grow': 'line-grow 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
