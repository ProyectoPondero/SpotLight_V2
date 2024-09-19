/** / @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/img/dibujoback.jpg')",
      },
      boxShadow: {
        'top': '0 -4px 20px rgba(0, 0, 0, 0.85)', // Sombra hacia arriba
      },
    },
  },
  plugins: [],
};