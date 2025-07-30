/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '2xl': '1400px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'spin': 'spin 1s linear infinite',
        'pulse-3d': 'pulse-3d 2s infinite',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'loading-bar': 'loading-bar 2s ease-in-out infinite',
        'bounce': 'bounce 0.6s infinite',
        'bounce-3d': 'bounce-3d 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-3d': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-3d': {
          '0%, 100%': { transform: 'translateY(0) rotateX(0deg)' },
          '50%': { transform: 'translateY(-10px) rotateX(10deg)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.8)' },
        },
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
};
