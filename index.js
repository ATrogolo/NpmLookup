'use strict';

const print = console.log;

// Module to print dates
const dateModule = require('./modules/date.js');

print(dateModule.now());
print(dateModule.format());

// fancy-log: https://www.npmjs.com/package/fancy-log
const fancyLog = require('fancy-log');
var whoami = {
  firstname: "Andrea",
  lastname: "Trogolo",
  city: "Turin"
};

fancyLog('a message');
fancyLog.info('a message');
fancyLog.warn('a message');
fancyLog.error('a message');
fancyLog.dir(whoami);

// Chalk: https://www.npmjs.com/package/chalk
const chalk = require('./modules/chalk.js');

chalk.printOk("\t\t ^_^'");

// Npmlog: https://github.com/npm/npmlog
const npmlog = require('./modules/npmlog.js');

npmlog.configure({
  level: 'info',
  heading: '->',
  headingStyle: {
    fg: 'green',
    bg: 'yellow'
  },
  prefix: 'abc',
  prefixStyle: {
    fg: 'red', // {String} Color for the foreground text
    bg: 'blue', // {String} Color for the background
    bold: true, // bold, inverse, underline {Boolean} Set the associated property
    bell: true // bell {Boolean} Make a noise
  },
  useFile: true,
  filename: 'log.txt'
});

npmlog.info("Something @ info level");
npmlog.error("Something @ ERROR level");



// Winston: https://www.npmjs.com/package/winston
const winston = require('winston');
const logDir = './logs';

// Create the log directory if it does not exist
const fs = require('fs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = new(winston.Logger)({
  transports: [
    new(winston.transports.Console)({
      level: 'debug',
      colorize: true, // colorize the output to the console
      timestamp: () => (new Date().toLocaleTimeString())
    }),
    // print higher severity log to file
    new(winston.transports.File)({
      level: 'warn',
      timestamp: () => (new Date().toLocaleTimeString()),
      filename: `${logDir}/winston-log.log`,
      json: false,
      formatter: function (entry) {
        let output = `[${entry.level.toUpperCase()}] - ${entry.timestamp()} - `;
        output += entry.message ? entry.message : '';
        output += (entry.meta && Object.keys(entry.meta).length) ? JSON.stringify(entry.meta) : '';
        return output;
      }
    })
  ]
});

// Ready to use:
logger.debug('Debugging purpose');
logger.info(`Let me check this ${chalk.blue('info')}`);

logger.warn("Don't worry: it's just a warning ...");
logger.error("Houston, we've got a problem ...");
