/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rubik','Open Sans','sans-serif'],
      },
      variants: {
        display: ['responsive', 'group-hover', 'group-focus'],
       },
      display: ["group-hover"],
    },
    
  },
  plugins: [],
}
