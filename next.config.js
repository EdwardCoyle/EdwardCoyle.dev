const withSass = require('@zeit/next-sass');
const prod = process.env.NODE_ENV === 'production';

const settings = withSass({});

// Use Sass when exporting
module.exports = settings;
