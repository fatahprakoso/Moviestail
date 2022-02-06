/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge').merge;
const common = require('./webpack.common.js');

/**
 * Dependencies note
 * 1. webpack-merge is used for merging webpack global configuration on
 *    webpack.common.js and this file
 * 2. html-webpack-plugin is used for updating linked js on html files
 */

module.exports = webpackMerge(common, {
  mode: 'development',
  devtool: 'eval',
  output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/../public`,
    assetModuleFilename: 'res/[name][ext]',
  },
  plugins: [new HtmlWebpackPlugin({
    template: `${__dirname}/../src/template.html`,
  })],
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          'style-loader', // 3. Creates `style` nodes from JS strings
          'css-loader', // 2. Translates CSS into CommonJS
          {
            loader: 'resolve-url-loader',
            // options: {
            //   removeCR: true,
            // },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: true,
            },
          }, // 1. do sass compile
        ],
      },
    ],
  },
});
