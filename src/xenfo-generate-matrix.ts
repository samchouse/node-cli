import chalk from 'chalk';
import { Command } from 'commander';
import util from 'util';

const program = new Command();

const generateMatrix = () => {
  const [matrixLength, childLength] = program.args.map((str) => parseInt(str));

  if (!matrixLength || !childLength)
    return console.log(chalk.red('Not enough arguements'));

  console.log(
    util.inspect(
      Array(matrixLength)
        .fill(null)
        .map(() =>
          Array(childLength)
            .fill(null)
            .map(() => Math.round(Math.random() * 40))
        ),
      { maxArrayLength: 999999999 }
    )
  );
};

program.action(() => generateMatrix()).parse(process.argv);
