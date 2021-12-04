module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        'home-intro': 'url(/images/home-intro-bg.jpeg)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
