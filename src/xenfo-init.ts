import { Command } from 'commander';

const program = new Command();

program
  .command('frontend', 'generate a frontend')
  .command('backend', 'generate a backend')
  .command('web', 'generate a website')
  .parse(process.argv);
