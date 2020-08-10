// DO NOT REMOVE!
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);

function build() {
  console.log('Creating an optimized production build...');
  compiler.run((err, stats) => {
    if (err) {
      console.log('Failed to compile.\n');
      console.error('err.message');
      return;
    }
    console.log('successfully builded. \n');
    console.log(stats);
  });
}

build();
