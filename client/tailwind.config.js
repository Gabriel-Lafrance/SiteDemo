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
      lg: ['28px','28px'],
      xl : ['36px','36px'],
      '2xl' : ['40px','40px'],
      '3xl': ['44px','44px'],
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
        'secondary': '#4599ff',
        'action': '#4551ff',
      },
      keyframes :{
        dropDown : {
          '0%' : {	opacity: '1', transform: 'translateY(-100%)'},
          '100%' : { opacity: '1', transform: 'translateY(0)'},
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'drop-down' : 'dropDown 0.7s ease 0s 1 normal forwards',
        'fadeIn': "fadeIn 2s ease-in forwards",
      }
    },
  },
  plugins: [
    require('tailwind-hamburgers')
  ],
};
