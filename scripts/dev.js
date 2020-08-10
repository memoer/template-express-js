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
  startLog() {
    console.log('NODEMON\t| start server in dev environment');
  }
  quitLog() {
    console.log('NODEMON\t| quit server in dev environment');
    console.log('NODEMON\t| bye');
  }
  restartLog() {
    console.log('NODEMON\t| quit server in dev environment');
  }
  initMyNodemon() {
    if (!nodemonConfig) {
      throw new Error('NODEMON\t| Error : nodemonConfig is none');
    }
    this.myNodemon = nodemon(nodemonConfig);
  }
  myNodemonOn() {
    nodemon
      .on('start', this.startLog)
      .on('quit', this.quitLog)
      .on('restart', this.restartLog);
  }
  run() {
    try {
      this.initMyNodemon();
      this.myNodemonOn();
    } catch (error) {
      console.error(error.meessage);
    }
  }
}

const nodemonProcess = new NodemonProcess(nodemonConfig);
nodemonProcess.run();
