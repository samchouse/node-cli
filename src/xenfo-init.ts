import { Command } from 'commander';

const program = new Command();

program
  .command('frontend', 'generate a frontend')
  .command('backend', 'generate a backend')
  .parse(process.argv);
