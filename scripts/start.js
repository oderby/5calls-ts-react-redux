process.env.NODE_ENV = 'development';
var DEFAULT_PORT = 3000;

var chalk = require('chalk');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var detect = require('detect-port');
var clearConsole = require('react-dev-utils/clearConsole');
var formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
var openBrowser = require('react-dev-utils/openBrowser');
var prompt = require('react-dev-utils/prompt');
var config = require('../config/webpack.config.dev');

function setupCompiler(host, port, protocol) {
  compiler = webpack(config);

  compiler.plugin('invalid', function() {
    clearConsole();
    console.log('Compiling...');
  });

  compiler.plugin('done', function(stats) {
    clearConsole();

    var messages = formatWebpackMessages(stats.toJson({}, true));
    if (!messages.errors.length && !messages.warnings.length) {
      console.log(chalk.green('Compiled successfully!'));
      console.log();
      console.log('The app is running at:');
      console.log();
      console.log('  ' + chalk.cyan(protocol + '://' + host + ':' + port + '/'));
    }

    if (messages.errors.length) {
      console.log(chalk.red('Failed to compile.'));
      console.log();
      messages.errors.forEach(message => {
        console.log(message);
        console.log();
      });
      return;
    }

    if (messages.warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.'));
      console.log();
      messages.warnings.forEach(message => {
        console.log(message);
        console.log();
      });
    }
  });
}

function runDevServer(host, port, protocol) {
  var devServer = new WebpackDevServer(compiler, {
    historyApiFallback: true,
    clientLogLevel: 'none',
    hot: true,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    },
    host: host
  });

  devServer.listen(port, (err, result) => {
    if (err) {
      return console.log(err);
    }

    //clearConsole();
    console.log(chalk.cyan('Starting the development server...'));
    console.log();
    openBrowser(protocol + '://' + host + ':' + port + '/');
  });
}

function run(port) {
  var protocol = 'http';
  var host = 'localhost';
  setupCompiler(host, port, protocol);
  runDevServer(host, port, protocol);
}

detect(DEFAULT_PORT).then(port => {
  if (port === DEFAULT_PORT) {
    run(port);
    return;
  }

  clearConsole();
  var question =
    chalk.yellow('Something is already running on port ' + DEFAULT_PORT + '.') +
    '\n\nWould you like to run the app on another port instead?';

  prompt(question, true).then(shouldChangePort => {
    if (shouldChangePort) {
      run(port);
    }
  });
});
