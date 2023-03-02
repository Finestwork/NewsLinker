const defaultThemes = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultThemes.fontFamily.sans]
      },
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1500px'
      }
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')]
};
