let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || './tailwind.config.js';

// passing options to specific plugins:
const tailwind = require('tailwindcss')(tailwindConfig);
const autoprefixer = require('autoprefixer');

module.exports = {
  // eslint-disable-next-line no-process-env
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    tailwind,
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? [ autoprefixer ] : [])
    // require('autoprefixer'),
  ]
}
