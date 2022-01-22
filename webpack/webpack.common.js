module.exports = {
  entry: {
    index: `${__dirname}/../src/index.js`,
    vendor: `${__dirname}/../src/vendor.js`,
  },
  module: {
    rules: [
      // this loader is used for extracting html files
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

      // this loader is used for extracting assets files.
      // This loader needed to set up assetModuleFilename on output properties.
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },

};
