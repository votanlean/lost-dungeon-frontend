module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      creepster: 'Creepster',
      soup: 'soup of justice',
    },
    extend: {
      colors: {
        main1: '#Af4425',
        main2: '#662e1c',
        main3: '#011a27',
        main4: '#063825',
        secondary1: '#Ebdcb2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
