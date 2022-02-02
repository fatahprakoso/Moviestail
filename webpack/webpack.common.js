module.exports = {
  entry: {
    index: `${__dirname}/../src/script/index.js`,
    vendor: `${__dirname}/../src/script/vendor.js`,
  },
  module: {
    rules: [
      // this loader is used for extracting html files
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

      // this loader is used for extracting assets files.
      // this loader requires setting up the assetModuleFilename on output object.
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },

};
