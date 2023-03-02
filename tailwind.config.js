const defaultThemes = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultThemes.fontFamily.sans],
        serif: ['Lora', ...defaultThemes.fontFamily.serif]
      }
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')]
};
