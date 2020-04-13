#!/usr/bin/env node
// ============================================================================
// Custom server application
// Pulled from https://github.com/zeit/next.js#custom-server-and-routing
// Used so that we can easily debug as a node application, as described here:
// https://github.com/zeit/next.js/issues/2044#issuecomment-319642140
// ============================================================================
// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
// ============================================================================
const { createServer } = require('http');
const { parse } = require('url');
const chalk = require('chalk');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

console.log(`Starting EdwardCoyle.io ${process.env.NODE_ENV} server...`);
app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    handle(req, res, parsedUrl);
  }).listen(3000, err => {
    if (err) throw err;
    console.log(`[ ${chalk.yellow('server')} ] Ready on http://localhost:3000`);
  })
});
