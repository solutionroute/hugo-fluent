const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')
const typography = require('@tailwindcss/typography');
const PRODUCTION = (process.env.HUGO_ENVIRONMENT === 'production' || process.env.NODE_ENV === 'production');

module.exports = {
    // tailwind 3 alpha - darkMode deprecated XXX sort out
  // darkMode: false, // enable with 'media' or 'class' https://tailwindcss.com/docs/dark-mode
  important: true, // See https://tailwindcss.com/docs/configuration#important
  theme: {
	  // Define your font imports override in your site's layout/partials/font-imports.html
	  // and then update the following keys as needed:
    extend: {
      fontFamily: {
        // look one
        // 'sans': ['"Lato"', ...defaultTheme.fontFamily.sans], // Montserrat as an alternative look
        // 'serif': ['"Neuton"', ...defaultTheme.fontFamily.serif],

        // look two
        'sans': ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans], // Montserrat as an alternative look
        'serif': ['"Source Serif Pro"', ...defaultTheme.fontFamily.serif],
        'mono': [...defaultTheme.fontFamily.mono], 
        // 'smallcaps': ['dolly-small-caps-new', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // First, re-mapping primary Tailwind colors to our theme palette.
        // See: https://tailwindcss.com/docs/customizing-colors#default-color-palette
        gray: colors.red,
        green: colors.lime,
        blue: colors.sky,
        yellow: colors.orange,

        // Role names for colors are used throughout hugo-fluent
        // main theme color shade is -600
        primary: colors.orange,
        // -700
        secondary: colors.green,
        // -600 for buttons, other secondary elements

        // REVERSE TEXT
        // for occasional dark on light/light on dark:
        // -50: light
        // -900: dark

        // badges / category buttons or category text
        badge: colors.blue,
        // -600: all

        neutral: colors.stone
        // -600: titles & text
        // -400: subtitles
        // -300: inactive, borders around whitespace
      },
      // typography: (theme) => ({
      //     DEFAULT: {
      //         css: {
				// // prefer heading colors same as base text.
      //           h1: {
      //             color: theme('colors.gray.700'),
      //             fontFamily: ['"Alegreya Sans"', ...defaultTheme.fontFamily.sans],
      //           },
      //           h2: {
      //             color: theme('colors.gray.700'),
      //             fontFamily: ['"Alegreya Sans"', ...defaultTheme.fontFamily.sans],
      //           },
      //           h3: {
      //             color: theme('colors.gray.700'),
      //             fontFamily: theme('fontFamily.sans'),
      //           },
      //           h4: {
      //             color: theme('colors.gray.700'),
      //             fontFamily: theme('fontFamily.sans'),
      //           },
      //           h5: {
      //             color: theme('colors.gray.700'),
      //             fontFamily: theme('fontFamily.sans'),
      //           },
      //           h6: {
      //             color: theme('colors.gray.700'),
      //             fontFamily: theme('fontFamily.sans'),
      //           },
      //         }
      //     },
      // }),
    },
  },
  variants: {
    extend: {},
  },
content: [
  './hugo_stats.json',
  './layouts/**/*.html',
],
  // purge: {
  //   enabled: PRODUCTION,
  //   content: [
  //     './hugo_stats.json',
  //     './layouts/**/*.html',
	// ],
	// extractors: [{
  //     extractor: (content) => {
	    // let els = JSON.parse(content).htmlElements;
		// return els.tags.concat(els.classes, els.ids);
	  // },
  //     extensions: ['json']
  //   },],
	// mode: 'all',
  // },
  plugins: [ typography ],
}
