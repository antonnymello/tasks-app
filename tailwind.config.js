module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'img-todo1': "url('/images/background.jpg')",
        'img-todo2': "url('/images/background2.jpg')",
        'img-todo3': "url('/images/background3.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
