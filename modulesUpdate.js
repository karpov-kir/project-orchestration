/* eslint-disable @typescript-eslint/no-var-requires */

const { execFileSync } = require('child_process');

const { getModulesFilteredByNameFromCli } = require('./modulePaths');

getModulesFilteredByNameFromCli().forEach((module) => {
  updateModule(module);
});

function updateModule({ modulePath, gitBranch }) {
  console.log('Updating a module', modulePath);

  execFileSync('git', ['fetch', '--all'], { stdio: 'inherit', cwd: modulePath });

  console.log('Switching to the latest commit on the master branch in', modulePath);
  execFileSync('git', ['reset', '--hard', `origin/${gitBranch}`], { stdio: 'inherit', cwd: modulePath });
  execFileSync('git', ['clean', '-fd'], { stdio: 'inherit', cwd: modulePath });
}

module.exports = {
  updateModule,
};
