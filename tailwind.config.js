/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        git: {
          dark: '#010409',
          medium: '#0d1117',
          light: '#f0f6fc',
          gray: '#9198a1',
        },
      },
      screens: {
        xs: '350px',
        '2xs': '450px',
        '3xs': '570px',
      },
    },
  },
  plugins: [],
}
