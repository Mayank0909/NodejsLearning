import chalk from "chalk";
import validator from "validator";

console.log(chalk.blue.underline.inverse("Hello world!"));

const res = validator.isEmail("mayank@bar.com");

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
