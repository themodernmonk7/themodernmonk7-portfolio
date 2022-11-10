/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "cslass",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        title: "'Inter', sans-serif;",
        arimo: "'Arimo', sans-serif;",
      },
      colors: {
        circle: "#303030",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(-6%)",
            // animation-timing-function: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          "50%": {
            transform: "translateY(0)",
            // animation-timing-function: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
      },
      animation: {
        float: "float 3s ease infinite",
      },
    },
  },
  plugins: [],
}
