module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      BLUET: 'rgba(136, 184, 255, 1)',
      REDT: 'rgba(255, 200, 200, 1)',
      GREENT: 'rgba(118, 255, 189, 1)',
      PINKT: 'rgba(247, 200, 255, 1)',
      BLUEHOVER: 'rgba(86, 154, 255)',
      REDHOVER: 'rgba(255, 219, 219, 1)',
      GREENHOVER: 'rgba(179, 255, 218, 1)',
      PINKHOVER: 'rgba(247, 200, 255, 0.50)',
      BLUE: '#B8BFFF',
      PINK: '#FFC9C9',
      GREEN: '#D8FFCA',
      WHITE: '#FFFFFF',
      DBLUE: '#0029FF',
      DRED: '#FF0000',
      DPINK: '#8000FF',
      DGREEN: '#23AF00',
      WHITE: '#FFFFFF',
      DPURPLE: '#10003D',
      PURPLET: 'rgba(16, 0, 61, 0.2)',
      BLUEPRO: '#00E0FF',
      PINKPRO: '#FFDBDB',
      PURPLEPRO: '#9F9DFF',
      GREENPRO: '#00FF66',
    },
    backgroundImage: {
      shapes: "url('/bg-4.png')",
    },
    fontFamily: {
      header: ['Archivo'],
      body: ['IBM Plex Mono'],
    },
    extend: {
      screens: {
        'hover-hover': { raw: '(hover: hover)' },
      },
      blur: {
        max: '50px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
