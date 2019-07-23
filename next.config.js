const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const sass = require('@zeit/next-sass');

const prod = process.env.NODE_ENV === 'production';

/**
 * NOTES:
 * - Compiles Sass files at build time.
 * - For `optimizedImages`, we also have to provide external packages that automatically
 *   get picked up by the plugin. This repo uses the `imagemin-svgo` package.
 *   https://github.com/cyrilwanner/next-optimized-images#optimization-packages
 */

module.exports = withPlugins([
  [sass],
  [optimizedImages, {
    imagesFolder: 'img',
    inlineImageLimit: -1, // disables all image inlining
    optimizeImagesInDev: true // if build times get ridiculous, set this to false
  }]
]);
