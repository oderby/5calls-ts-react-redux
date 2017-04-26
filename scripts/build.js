process.env.NODE_ENV = 'production';

var chalk = require('chalk');
var fs = require('fs-extra');
var path = require('path');
var rimrafSync = require('rimraf').sync;
var webpack = require('webpack');
var config = require('../config/webpack.config.prod');

var publicPath = path.join(__dirname, '../public');

function deployToBuildFolder() {
  rimrafSync(config.output.path + '/*');

  build();

  copyPublicFolder();
};

function printErrors(summary, errors) {
  console.log(chalk.red(summary));
  console.log();
  errors.forEach(err => {
    console.log(err.message || err);
    console.log();
  });
}

function build() {
  console.log('Creating an optimized production build...');
  webpack(config).run((err, stats) => {
    if (err) {
      printErrors('Failed to compile.', [err]);
      process.exit(1);
    }

    if (stats.compilation.errors.length) {
      printErrors('Failed to compile.', stats.compilation.errors);
      process.exit(1);
    }

    console.log(chalk.green('Compiled successfully.'));
    console.log();
  });
}

function copyPublicFolder() {
  fs.copySync(config.output.path, publicPath, {
    dereference: true,
    filter: file => file !== 'index.html'
  });
}

deployToBuildFolder();