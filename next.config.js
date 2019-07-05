const withSass = require('@zeit/next-sass');
const prod = process.env.NODE_ENV === 'production';

const settings = withSass({
  //assetPrefix: prod ? '/EdwardCoyle.dev/' : ''
});

// Use Sass when exporting
module.exports = settings;
