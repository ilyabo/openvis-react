/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');
var bourbon = require('node-bourbon').includePaths;

module.exports = {

  output: {
    filename: 'main.js',
    publicPath: '/assets/'
  },

  cache: true,
  debug: true,
  devtool: false,
  entry: [
      'webpack/hot/only-dev-server',
      './src/js/main.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [ 'node_modules', 'src/js' ]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules|snippets/,
      loader: 'react-hot!jsx-loader?harmony!babel'
    },
    { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
    { test: /\.scss/, loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&includePaths[]='+ bourbon},
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
