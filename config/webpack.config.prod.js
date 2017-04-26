var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entries = [
  path.join(__dirname, '../src/App'),
];

var output = {
  filename: 'bundle.js',
  path: path.join(__dirname, '../build')
};

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify("Production")
    }
  }),
  new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
  }),
];

module.exports = {
  entry: entries,
  output: output,
  devtool: 'eval',
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  plugins: plugins
};
