/**
 * Copies all pre-compiled dependencies from `node_modules/` to their required locations
 * =========================
 */
const path = require('path');

// ==========================
// Paths/Settings
// ==========================
const paths = {
  normalize: {
    in: path.resolve(__dirname, '..', 'node_modules', 'normalize.css', 'normalize.css'),
    out: path.resolve(__dirname, '..', 'src', 'core', 'normalize.scss')
  }
}

// ==========================
// Main
// ==========================
// TODO: make this work!
console.log('NOTE: This script still needs some work... Exiting for now...');
process.exit(0);
