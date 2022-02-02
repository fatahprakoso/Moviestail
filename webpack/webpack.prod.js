/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

const webpackMerge = require('webpack-merge').merge;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractCSS = require('mini-css-extract-plugin');
const OptimizeJS = require('terser-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const OptimizeCSS = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common.js');

/**
 * Dependencies note
 * 1. webpack-merge is used for merging webpack global configuration on
 *    webpack.common.js and this file
 * 2. clean-webpack-plugin is used for cleaning unused hashed file that was
 *    created by webpack
 * 3. mini-css-extract-plugin is used for extracting scss file to css file
 * 4. tersert-webpack-plugin is used for optimizing javascript filename
 * 4. in this file, html-webpack-plugin is used for optimizing html filename
 */

module.exports = webpackMerge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    // caching output file (use contentHash)
    filename: '[name].[contenthash].bundle.js',
    path: `${__dirname}/../public`,
    assetModuleFilename: 'res/[name].[hash][ext]',
  },
  plugins: [
    new ExtractCSS({ filename: '[name].[contenthash].css' }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [
      new HTMLPlugin({
        template: '../src/template.html',
        minify: {
          removeAttributeQuotes: true,
          removeComments: true,
          collapseWhitespace: true,
        },
      }),
      new OptimizeCSS(),
      new OptimizeJS(),
    ],
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          ExtractCSS.loader,
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
});
