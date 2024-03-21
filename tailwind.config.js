/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-brisa": "#df8304",
        "bg-nav": "#283342",
        "body-bg": "#edf1f5#",
      }
    },
  },
  plugins: [],
}