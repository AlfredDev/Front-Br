/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-brisa": "#DF8304",
        "bg-nav": "#283342",
      }
    },
  },
  plugins: [],
}