// DO NOT REMOVE!
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);

class Builder {
  compiler = null;
  constructor(compiler) {
    this.compiler = compiler;
  }

  log(text) {
    console.log(`WEBPACK\t| ${text}`);
  }

  compileRunCB(error, stats) {
    if (error) throw new Error(error);
    this.log('Successfully builded. ------------------');
    console.log(stats);
    this.log('Successfully builded. ------------------');
  }

  run() {
    if (!this.compiler) {
      throw new Error('WEBPACK\t| Error : webpack compiler is NULL [ scripts/prod.js ]');
    }
    this.log('Creating an optimized production build...');
    this.compiler.run(this.compileRunCB);
  }
}

const builder = new Builder(compiler);
builder.run();
