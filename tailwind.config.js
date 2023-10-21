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
      }
    },
  },
  plugins: [],
}

