/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts,scss,css}', './index/html'],
  theme: {
    fontFamily: { sans: ['Inter', 'sans-serif'] },
    extend: {
      backgroundImage: {
        asce: "url('../public/bg-asce.png')",
        'bg-gradient':
          'linear-gradient(89.86deg, #9572fc 20.08%, #45e7ad 39.94%, #e1055e 75.57%)',
        'bg-gradient-100':
          'linear-gradient(188deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.88%)',
      },
    },
  },
  plugins: [],
};
