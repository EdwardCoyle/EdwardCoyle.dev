const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const sass = require('@zeit/next-sass');

// Detect Node environment variables
const prod = process.env.NODE_ENV === 'production';

// The actual Next.js configuration
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });
    return config;
  }
};

// Always include these plugins
const pluginsList = [
   // Compiles Sass files at build time.
  [sass],

  // For `optimizedImages`, we also have to provide external packages that automatically
  // get picked up by the plugin. This repo uses the `imagemin-svgo` package.
  // https://github.com/cyrilwanner/next-optimized-images#optimization-packages
  [optimizedImages, {
    imagesFolder: 'img',
    inlineImageLimit: -1, // disables all image inlining
    optimizeImagesInDev: true // if build times get ridiculous, set this to false
  }]
];

module.exports = withPlugins(pluginsList, nextConfig);
