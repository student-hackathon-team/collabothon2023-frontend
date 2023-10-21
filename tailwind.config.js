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
        primary: '"Syne"'
      },
      colors: {
        primary: '#FC993B',
        secondary: '#B4B3EF',
        accent: '#5A3851',
        purple: '#7C70B8',
        dark: '#3B424B',
        light: '#F3F0E9'
      },
      animation: {
        riseModal: "riseModal 0.8s ease",
        expandList: "expandList 0.8s ease-in-out",
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
      },
    },
  },
  plugins: [],
}

