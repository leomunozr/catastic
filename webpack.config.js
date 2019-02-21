var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/public'),
    publicPath: 'app/public',
    sourceMapFilename: "bundle.map"
  },
  devtool: '#source-map',
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=/images/[name].[ext]' }
    ]
  }
};
