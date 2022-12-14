/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "sclass",
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
        main_background_color: "#171718",
        circle: "#303030",
        circle_for_primary: "rgb(236 72 153 / 0.8)",
        circle_for_secondary: "",
        cross_bg_primary: "rgb(236 72 153 / 0.8)",
        cross_bg_secondary: "",
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
