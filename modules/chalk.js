const chalk = require('chalk');
const print = console.log;

let levels = {
  ok: chalk.green,
  warn: chalk.yellow,
  error: chalk.red
};

// Simple extensions to Chalk lib
chalk.printOk = message => {
  print(levels.ok(message));
}

chalk.printWarn = message => {
  print(levels.warn(message));
}

chalk.printError = message => {
  print(levels.warn(message));
}

// Examples:
// print(chalk.green(`Here we're using ${chalk.whiteBright('chalk')} syntax`));
// print(chalk.yellow('This is a warning'));
// print(chalk.red('This is an error'));
// print(chalk.bold.bgGreen('PASSED'));

print(chalk.green(`~~~ ${chalk.redBright('C')}${chalk.greenBright('H')}${chalk.cyanBright('A')}${chalk.yellowBright('L')}${chalk.whiteBright('K')} library successfuly imported ~~~`));

module.exports = chalk;