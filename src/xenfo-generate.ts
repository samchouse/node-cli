import { Command } from 'commander';

const program = new Command();

program
  .command('matrix <matrixLength> <childLength>', 'generate a matrix')
  .parse(process.argv);
