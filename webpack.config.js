const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    fallback: {
      "fs": false,
      "os": false,
      "path": false
    },
  },
  // Other webpack configurations...
};