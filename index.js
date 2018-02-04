const print = console.log;

// Module to print dates
const dateModule = require('./modules/date.js');

console.log(dateModule.now());
console.log(dateModule.format());

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

chalk.printOk("^_^'");

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