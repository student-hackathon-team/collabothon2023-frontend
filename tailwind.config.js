/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        button: "4px 4px 4px 0px rgba(0, 0, 0, 0.80);",
        "button-click": "2px 2px 4px 0px rgba(0, 0, 0, 0.80);",
      },
      fontFamily: {
        sans: '"Nunito"',
        primary: '"Poppins"'
      },
      colors: {
        primary: '#3A71F9',
        primaryLight: '#E7EDFE',
        secondary: '#FDA53C',
        accent: '#77D2A9',
        purple: '#7C70B8',
        dark: '#282930',
        light: '#F3F3F3'
      },
      animation: {
        riseModal: "riseModal 0.8s ease",
        expandList: "expandList 0.8s ease-in-out",
        slide1: "slide1 0.5s ease-in-out",
        slide2: "slide2 0.5s ease-in-out",
        slide3: "slide3 0.5s ease-in-out",
        slideDown: "slideDown 0.5s ease-in-out",
        jump: "jump 0.5s ease-in-out",
        fadeIn: "fadeIn 0.5s linear",
        slideLeft: "slideLeft 0.5s ease-in-out",
        slideRight: "slideRight 0.5s ease-in-out",
        rotate: "rotate 0.3s ease-in-out"
      },
      keyframes: {
        riseModal: {
          "0%": { transform: "translateY(-20px) scale(50%)", },
          "50%": { transform: "translateY(200px) scale(75%)", },
          "90%": { transform: "translateY(30px) scale(95%)", },
          "100%": { transform: "translateY(0px) scale(100%)", },
        },
        expandList: {
          "0%": { opacity: "0", transform: "translateY(0px) scale(50%)", height: "15%", },
          "10%": { opacity: "100", transform: "translateY(0px) scale(100%)", height: "15%", },
          "25%": { transform: "translateY(0px)", height: "15%", },
          "30%": { transform: "translateY(0px)", height: "15%", },
          "90%": { transform: "translateY(0px) scale(95%)", height: "100%", },
          "100%": { transform: "translateY(0px) scale(100%)", },
        },
        slide1: {
          "0%": {transform: "translateY(300px)"},
          "70%": {transform: "translateY(0px)"},
          "100%": {transform: "translateY(0px)"},
        },
        slide2: { "0%": {transform: "translateY(300px)"},
        "15%": {transform: "translateY(300px)"},
        "85%": {transform: "translateY(0px)"},
        "100%": {transform: "translateY(0px)"}},
        slide3: { "0%": {transform: "translateY(300px)"},
        "30%": {transform: "translateY(300px)"},
        "100%": {transform: "translateY(0px)"}},
        slideDown: {
          "0%": {transform: "translateY(-200px)"},
        "100%": {transform: "translateY(0px)"}
        },
        jump: {
          "0%": {transform: "scale(1)", opacity: "0.7"},
          "33%": {transform: "scale(0.95)", opacity: "0.9"},
          "66%": {transform: "scale(1.05)", opacity: "1"},
          "100%": {transform: "scale(1)", opacity: "1"},
        },
        fadeIn: {
          "0%": {opacity: "0"},
          "100%": { opacity: "1"},
        },
        slideLeft: {
          "0%": {transform: "translateX(-300px)"},
        "100%": {transform: "translateX(0px)"}
        },
        slideRight: {
          "0%": {transform: "translateX(300px)"},
        "100%": {transform: "translateX(0px)"}
        },
        rotate: {
          "0%": {transform: "rotate(0deg)"},
          "25%": {transform: "rotate(-20deg)"},
          "50%": {transform: "rotate(0deg)"},
          "75%": {transform: "rotate(20deg)"},
          "100%": {transform: "rotate(0deg)"}
        }
      },
    },
  },
  plugins: [],
}

