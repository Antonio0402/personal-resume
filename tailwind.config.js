/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./icons/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-light": "#FAFAFA",
        "green-light": "#d2eff1",
      },
      fontFamily: {
        'sans': ["Georgia", ...defaultTheme.fontFamily.sans],
        'serif': ["Merriweather", ...defaultTheme.fontFamily.serif],
        'display': ["Oswald", "sans-serif"]
      }
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({
        'h1': {
          '@apply font-display text-yellow-400 text-4xl sm:text-6xl': {}
        },
        'h2': {
          '@apply font-display text-2xl': {}
        },
        'h3': {
          '@apply font-display text-lg': {}
        },
        'section': {
          '@apply [&:not(:last-child)]:mb-10': {}
        }
      }),
        addComponents({
          '.btn': {
            '@apply w-1/2 h-12 text-slate-700 font-display uppercase text-xl px-4 transition ease-in-out hover:text-yellow-400 aria-selected:hover:text-white hover:bg-slate-700 duration-200': {}
          }
        })
    })
  ],
}
