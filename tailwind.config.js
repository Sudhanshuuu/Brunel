/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage :{
        'bg': "url('../src/assets/Home/bg.png')", 
       },
       fontFamily: {
        Grace: ["Covered By Your Grace", "cursive"],
        Manrope: ["Manrope", "sans-serif"],
       }
    },
  },
  plugins: [],
}

