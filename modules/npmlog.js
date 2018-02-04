const log = require('npmlog');
const LEVELS = {
  SILENT: 'silent',
  SILLY: 'silly',
  VERBOSE: 'verbose',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error'
};
var logfile;

// log structure: [heading] [level] [prefix] [message]

var configure = options => {
  log.level = options.level || 'info'; // {String} log level: [silent|silly|verbose|info|http|warn|error]
  log.heading = options.heading || ''; // {String} head of each line
  log.headingStyle = options.headingStyle; // {Object} style for heading
  log.prefix = options.prefix || ''; // {String} prefix for each line
  log.prefixStyle = options.prefixStyle; // {Object} style for prefix
  log.useFile = options.useFile || false; // {Boolean} write log to file
  log.filename = options.filename || 'log.txt'; // {String} filename to write
}

var silly = (message, prefix) => {
  logger('silly', prefix, message);
}
var verbose = (message, prefix) => {
  logger('verbose', prefix, message);
}
var info = (message, prefix) => {
  logger('info', prefix, message);
}
var warn = (message, prefix) => {
  logger('warn', prefix, message);
}
var error = (message, prefix) => {
  logger('error', prefix, message);
}

var logger = (level, prefix = log.prefix, message) => {
  if (level == LEVELS.SILENT) return;
  else if (level == LEVELS.SILLY)
    log.silly(prefix, message)
  else if (level == LEVELS.VERBOSE)
    log.verbose(prefix, message)
  else if (level == LEVELS.INFO)
    log.info(prefix, message)
  else if (level == LEVELS.WARN)
    log.warn(prefix, message)
  else if (level == LEVELS.ERROR)
    log.error(prefix, message)
  else return;

  if (log.useFile) fileWrite();
}

var fileWrite = () => {
  logfile = logfile || require('npmlog-file');
  logfile.write(log, log.filename);
}

module.exports = {
  configure: configure,
  silly: silly,
  verbose: verbose,
  info: info,
  warn: warn,
  error: error
};