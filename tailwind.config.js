
/** @type {import('tailwindcss').Config} */
import plugins from 'tailwindcss/plugin'
export const content = [
  './src/**/*.{html,js}',
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}',
]
export const theme = {
  extend: {
    fontFamily: {
      'sans': ['"DM Sans"'],
    },
    keyframes: {
      animation: {
        '0% 100%': {
          transform: 'scale(2.0)',
        },
       '0% 100%': {
          opacity: '1',
      }
    }
  },
}
}
export const variants = {}
export const plugins = []
export const experimental = {
  applyComplexClasses: true,
}


// module.exports = {
//   content: [
//   './src/**/*.{html,js}',
//   './pages/**/*.{html,js}',
//   './components/**/*.{html,js}',
//   ],
//   theme: {
//     extend: {},
//   },
//   variants: {},
//   plugins:[ 

// ],
//   experimental: {
//     applyComplexClasses: true,
//   },
// }


