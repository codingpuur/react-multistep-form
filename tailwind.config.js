/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        floating:{
          "0%":{transform:'translateY(0%)'},
          "50%":{transform:'translateY(-5%)'},
          "100%":{transform:'translateY(0%)'},
        },
      },
      animation:{
        'fobj':'floating 5s linear infinite',
      },
    },
  },
  plugins: [],
}
