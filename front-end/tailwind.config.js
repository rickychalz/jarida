/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      backgroundImage:{
        'hero_pattern' : "url('/src/assets/bg.svg')"
      }
    }
  },
  plugins: [],
}

