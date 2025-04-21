/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00E5D8",
        secondary: "#C600FF",
        accent: "#ff6b6b",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s infinite alternate',
        'light-move': 'lightMove 8s infinite alternate ease-in-out',
      },
      keyframes: {
        lightMove: {
          '0%': { transform: 'rotate(-15deg) scaleY(1)' },
          '50%': { transform: 'rotate(5deg) scaleY(1.1)' },
          '100%': { transform: 'rotate(15deg) scaleY(1)' },
        }
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}