const jsconfig = {
  // if NODE_ENV undefined, then assign mode to production
  // add prod & dev script on package.json
  mode: process.env.NODE_ENV ?? 'production',
  entry: './src/js/min.js',
  output: {
    filename: 'min.js',
    path: `${__dirname}/public/script`,
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              // eslint-disable-next-line global-require
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
};

module.exports = jsconfig;
