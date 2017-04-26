var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entries = [
  path.join(__dirname, '../src/App'),
  //'webpack-dev-server/client?http://localhost:3001',
];

var output = {
  filename: 'bundle.js',
  path: path.join(__dirname, './build')
};

var plugins = [
  new webpack.PrefetchPlugin('react'),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: "'dev'"
    }
  }),
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
  }),
];

module.exports = {
  entry: entries,
  output: output,
  devtool: '',
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