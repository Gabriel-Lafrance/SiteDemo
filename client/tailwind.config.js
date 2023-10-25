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
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeInDownBig: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-2000px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        fadeInLeftBig: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-2000px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        fadeInRightBig: {
          '0%': {
            opacity: '0',
            transform: 'translateX(2000px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeInUpBig: {
          '0%': {
            opacity: '0',
            transform: 'translateY(2000px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeOut: {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          },
        },
        fadeOutDown: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
        },
        fadeOutDownBig: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(2000px)'
          },
        },
        fadeOutLeft: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
        },
        fadeOutLeftBig: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(-2000px)'
          },
        },
        fadeOutRight: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
        },
        fadeOutRightBig: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(2000px)'
          },
        },
        fadeOutUp: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
        },
        fadeOutUpBig: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-2000px)'
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInDown: 'fadeInDown 1s ease-in-out',
        fadeInDownBig: 'fadeInDownBig 1s ease-in-out',
        fadeInLeft: 'fadeInLeft 1s ease-in-out',
        fadeInLeftBig: 'fadeInLeftBig 1s ease-in-out',
        fadeInRight: 'fadeInRight 1s ease-in-out',
        fadeInRightBig: 'fadeInRightBig 1s ease-in-out',
        fadeInUp: 'fadeInUp 1s ease-in-out',
        fadeInUpBig: 'fadeInUpBig 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
        fadeOutDown: 'fadeOutDown 1s ease-in-out',
        fadeOutDownBig: 'fadeOutDownBig 1s ease-in-out',
        fadeOutLeft: 'fadeOutLeft 1s ease-in-out',
        fadeOutLeftBig: 'fadeOutLeftBig 1s ease-in-out',
        fadeOutRight: 'fadeOutRight 1s ease-in-out',
        fadeOutRightBig: 'fadeOutRightBig 1s ease-in-out',
        fadeOutUp: 'fadeOutUp 1s ease-in-out',
        fadeOutUpBig: 'fadeOutUpBig 1s ease-in-out',
      }
    },
  },
  plugins: [
    require('tailwind-hamburgers')
  ],
};
