/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: {
          900: "#66686D",
          300: "#E8EAED",
        },
        orange: {
          700: "#FD6841",
        },
        transparent: "transparent",
        current: "currentColor",
      },
      fontSize:{
        sm: 12,
        md: 16,
        lg: 24,
        xl: 36,
        xxl: 72,
      },
      extend: {
        fontFamily: {
          sans: ["Inter", "Arial", "sans-serif"],
        },
        keyframes: {
          spinVariable: {
            '0%': { transform: 'rotate(0deg)' },
            '50%': { transform: 'rotate(180deg)', animationTimingFunction: 'ease-in' },
            '100%': { transform: 'rotate(360deg)', animationTimingFunction: 'ease-out' },
          },
        },
        animation: {
          'spin-variable': 'spinVariable 1.5s infinite',
        },
      },
    },
    plugins: [],
}