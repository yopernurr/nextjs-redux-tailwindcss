const { colors: { ...colors } } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/*.js',
    './components/**/*.js',
    './pages/**/*.js',
    './pages/*.js',
    './components/*.tsx',
    './components/**/*.tsx',
    './pages/**/*.tsx',
    './pages/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: '#EB3F36',
        'text-primary': '#696969',
        gray: {
          ...colors.gray,
          50: '#FDFBFB',
          100: '#E5E5E5',
          200: '#F2F2F2',
          300: '#E0E0E0',
          400: '#C4C4C4',
          500: '#BEBEBE'
        },
        green: {
          ...colors.green,
          500: '#3FAE5E',
        }
      }
    },
    screens:{
      'xs': {'min': '0', 'max': '639px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px'},
    }
  },
  variants: {
    appearance: ['responsive']
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
