#!/usr/bin/env node

import { Command } from 'commander';
import { version } from '../package.json';

const program = new Command();

program
  .version(version, '-v, --version')
  .description("Xenfo's utility CLI!")
  .command('init <type>', 'init a new project')
  .parse(process.argv);
