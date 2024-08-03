/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
    'sm': '300px',
    'md': '868px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px', // extra extra large screens (very wide desktops)
  },
    extend: {},
  },
  plugins: [],
}

