/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#2C3E50',
        'primary-teal': '#16A085',
        'primary-slate': '#64748b',
        'accent-gold': '#F39C12',
        'accent-purple': '#8E44AD',
        'accent-emerald': '#27AE60',
        'background-white': '#ffffff',
        'background-light': '#f8fafc',
      },
    },
  },
  plugins: [],
} 