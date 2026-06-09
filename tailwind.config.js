/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}", // Verify app dir is included coverage
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1E76B8',
        secondary: '#DF1021',
      }
    },
  },
  plugins: [],
};
