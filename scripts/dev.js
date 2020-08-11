// DO NOT REMOVE!
process.env.NODE_ENV = 'development';
const nodemon = require('nodemon');
const nodemonConfig = require('../nodemon.json');

class NodemonProcess {
  myNodemon = null;
  nodemonConfig = null;

  constructor(nodemonConfig) {
    this.nodemonConfig = nodemonConfig;
  }

  initMyNodemon() {
    if (!nodemonConfig) {
      throw new Error('NODEMON\t| Error : nodemonConfig is NULL [ scripts/dev.js ]');
    }
    this.myNodemon = nodemon(nodemonConfig);
  }

  log(status) {
    console.log(`NODEMON\t| ${status} server in dev environment`);
  }

  myNodemonOn() {
    nodemon
      .on('start', () => this.log('start'))
      .on('quit', () => this.log('quit'))
      .on('restart', () => this.log('restart'));
  }

  up() {
    try {
      this.initMyNodemon();
      this.myNodemonOn();
    } catch (error) {
      throw new Error(error);
    }
  }
}

const nodemonProcess = new NodemonProcess(nodemonConfig);
nodemonProcess.up();
