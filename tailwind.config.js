module.exports = {
  // mode: 'jit', // Add Just In Time Mode

  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      mixlistPurple: '#10003D',
      white: '#FFFFFF',
      red: '#FFB8A8',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-hamburgers')],
};
