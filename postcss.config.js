const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js, ./tailwindcss-config.js'),
    require('autoprefixer'),
  ]
}