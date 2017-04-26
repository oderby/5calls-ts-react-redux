var webpack = require('webpack');
var path = require('path');

var env = process.env.NODE_ENV;

var entries = [path.join(__dirname, 'src/App')];
var output = {
  filename: 'bundle.js',
  path: path.join(__dirname, 'build')
};

var plugins = [
  new webpack.PrefetchPlugin('react'),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: "'" + env + "'"
    }
  })
];

var devtool = '';

if (env === 'dev') {
  entries = entries.concat(['webpack-dev-server/client?http://localhost:3001']);
  output.path = __dirname;
  devtool = '';
  plugins.push(new webpack.HotModuleReplacementPlugin());
} else {
  plugins = plugins.concat([
  ]);
}

module.exports = {
  entry: entries,
  output: output,
  devtool: devtool,
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
