/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-out-left": {
          "0%": {
              opacity: 1,
          },
          "100%": {
              opacity: 0,
              transform: "translate3d(-100%, 0, 0)",
          },
        },
        "fade-in-right": {
          "0%": {
              opacity: 0,
              transform: "translate3d(100%, 0, 0)",
          },
          "100%": {
              opacity: 1,
              transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-out": {
          "0%": {
              opacity: 1
          },
          "100%": {
              opacity: 0
          },
        },
      },
      animation: {
        fadeoutleft: 'fade-out-left 1s ease-in-out 1',
        fadeinright: 'fade-in-right 1s ease-in-out 1',
        fadeout: 'fade-out 1s ease-out 1',
      },
    },
  },
  plugins: [],
}

