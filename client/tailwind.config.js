const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontSize: {
      'xs' : ['12px','12px'],
      sm : ['16px','16px'],
      base: ['20px','20px'],
      lg: ['24px','24px'],
      xl : ['28px','28px'],
      '2xl' : ['32px','32px'],
      '3xl': ['px','44px'],
    },
    screens: {
      'xs': '535px',
      'sm': '640px',
      'smplus': '680px',
      'md': '920px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      transitionProperty: {
        'height': 'height',
      },
      colors: {
        'primary': '#18181b',
        'secondary': '#2438f0',
        'action': '#000c7d',
      },
      transitionProperty: {
        'height': 'height',
      }
    },
  },
  plugins: [
    require('tailwind-hamburgers')
  ],
};
