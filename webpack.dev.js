const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

const SRC = path.resolve(__dirname, 'src');
const E2E_TEST = path.resolve(__dirname, 'test/e2e');
const PUBLIC = path.resolve(__dirname, 'public/js');

var config = merge(common, {
  entry: E2E_TEST + '/index.js',
  output: {
    path: PUBLIC,
    filename: 'pureSrc.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: E2E_TEST,
        loader: 'babel-loader',
        query: {
          plugins: ["babel-plugin-transform-object-rest-spread"]
        }
      }
    ]
  },
  resolve: {
    alias: {
      "@PureSrc": `${SRC}`,
    }
  }
});

module.exports = config;