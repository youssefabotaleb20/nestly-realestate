/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D0D0D',
        off: '#F7F6F1',
        accent: '#1D6F42',
        mid: '#4A4A4A',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        instrument: ['"Instrument Sans"', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulse: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(29,111,66,0.35)' },
          '50%':     { boxShadow: '0 0 0 8px rgba(29,111,66,0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease forwards',
        marquee: 'marquee 22s linear infinite',
        pulse:   'pulse 2s infinite',
      },
    },
  },
  plugins: [],
}
