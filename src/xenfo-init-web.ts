import chalk from 'chalk';
import { Command } from 'commander';
import { spawnSync } from 'child_process';

const program = new Command();

const cwd = process.cwd();

const initBackend = () => {
  console.log(chalk.cyan('Cloning repository...'));

  const child = spawnSync(
    `git clone -q https://github.com/Xenfo/web-template.git web && rm -rf web/.git/`,
    { cwd, shell: true }
  );

  if (child.error) {
    console.log(chalk.red(child.error));
  } else if (child.status === 0) {
    console.log(
      chalk.green(
        'Successfully cloned repository, installing dependencies...',
        child.stdout.toString()
      )
    );

    const dependantChild = spawnSync(
      `cd backend && cp .env.example .env.development && cp .env.example .env.production && yarn && cd .. && cd frontend && cp .env.example .env.development && cp .env.example .env.production && yarn`,
      { cwd, shell: true }
    );

    if (dependantChild.error) {
      console.log(chalk.red(child.error));
    } else if (child.status === 0) {
      console.log(chalk.green('Done!', child.stdout.toString()));
    }
  }
};

program.action(() => initBackend()).parse(process.argv);
