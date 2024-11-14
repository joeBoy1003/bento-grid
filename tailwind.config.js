/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },
      fontWeight: {
        semibold: 400,
        bold: 500,
      },
      fontSize: {
        normal: 16
      }
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    
    colors: {
      'purple-100': 'hsl(254, 88%, 90%)',
      'purple-500': 'hsl(256, 67%, 59%)',
      'yellow-100': 'hsl(31, 66%, 93%)',
      'yellow-500': 'hsl(39, 100%, 71%)',
      'white': 'hsl(0, 0%, 100%)',
      'black': 'hsl(0, 0%, 7%)',
      'gray-500': '#f5f5f5',
    },
  },
  plugins: [],
}