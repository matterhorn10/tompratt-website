/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tp-navy': '#1a3a52',
        'tp-navy-dark': '#0f2438',
        'tp-navy-light': '#2d5a7b',
      },
      fontFamily: {
        'display': ['Cabinet Grotesk', 'sans-serif'],
        'body': ['Instrument Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
