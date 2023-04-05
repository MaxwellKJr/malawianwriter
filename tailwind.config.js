/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#ff0077',
        'brand-darker': '#ff0044',
      },
      fontFamily: {
        Poppins: ['Poppins, sans-serif'],
        'Dancing-Script': ['Dancing Script, serif'],
      },
      container: {
        padding: '2rem',
        center: true,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
