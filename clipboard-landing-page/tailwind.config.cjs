/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        xl: "4rem"
      }
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: " hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)"
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"]
      },
      backgroundImage: {
        "hero-mobile": "url('/src/assets/images/bg-header-mobile.png')",
        "hero-desktop": "url('/src/assets/images/bg-header-desktop.png')"
      }
    }
  },
  plugins: []
}
