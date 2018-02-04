// https://www.npmjs.com/package/date-format
var dateFormat = require('date-format');

var now = function (format = 'hh:mm:ss.SSS') {
  return dateFormat.asString(format, new Date());
};

var format = function (date = new Date(), format = 'hh:mm:ss.SSS') {
  return dateFormat.asString(format, date);
};

module.exports = {
  now: now,
  format: format
};