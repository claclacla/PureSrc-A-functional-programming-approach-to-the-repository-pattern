const webpack = require('webpack');
const path = require('path');

const SRC = path.resolve(__dirname, 'test/e2e');
const PUBLIC = path.resolve(__dirname, 'public/js');

var config = {
  entry: SRC + '/index.js',
  output: {
    path: PUBLIC,
    filename: 'pureSrc.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : SRC,
        loader : 'babel-loader',
        query: {
          plugins: ["babel-plugin-transform-object-rest-spread"]
        }
      }
    ]
  }
};

module.exports = config;