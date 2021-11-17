module.exports = {
  // mode: 'jit', // Add Just In Time Mode

  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      BLUET: 'rgba(86, 154, 255, 0.85)',
      REDT: 'rgba(255, 200, 200, 0.85)',
      GREENT: 'rgba(118, 255, 189, 0.85)',
      PINKT: 'rgba(247, 200, 255, 0.85)',
      BLUE: '#B8BFFF',
      PINK: '#FFC9C9',
      GREEN: '#D8FFCA',
      WHITE: '#FFFFFF',
      DBLUE: '#0029FF',
      DRED: '#FF0000',
      DPINK: '#8000FF',
      DGREEN: '#23AF00',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-hamburgers')],
};