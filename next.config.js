const withSass = require('@zeit/next-sass');
const prod = process.env.NODE_ENV === 'production';

const settings = withSass({
  assetPrefix: prod ? '/EdwardCoyle.github.io/' : ''
});

// Use Sass when exporting
module.exports = settings;
