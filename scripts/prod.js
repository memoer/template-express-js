// DO NOT REMOVE!
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);

function build() {
  console.log(`WEBPACK\t| Creating an optimized production build...`);
  compiler.run((err, stats) => {
    if (err) throw new Error(err);
    console.log(`WEBPACK\t| Successfully builded.`);
    console.log(stats);
  });
}

build();
