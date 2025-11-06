/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'wedding-beige': '#f5f3f0',
        'wedding-sage': '#c8d5d0',
        'wedding-mint': '#b8c9c3',
        'wedding-dark': '#2b2b2b',
        'wedding-gray': '#8a8a8a',
      },
    },
  },
  plugins: [],
}
