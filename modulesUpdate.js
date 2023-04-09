import { execFileSync } from 'child_process';

import { getModulesFilteredByNameFromCli } from './modulePaths';

getModulesFilteredByNameFromCli().forEach((module) => {
  updateModule(module);
});

export function updateModule({ modulePath, gitBranch }) {
  console.log('Updating a module', modulePath);

  execFileSync('git', ['fetch', '--all'], { stdio: 'inherit', cwd: modulePath });

  console.log(`Switching to the latest commit on the ${gitBranch} branch in`, modulePath);
  execFileSync('git', ['reset', '--hard', `origin/${gitBranch}`], { stdio: 'inherit', cwd: modulePath });
  execFileSync('git', ['clean', '-fd'], { stdio: 'inherit', cwd: modulePath });
}
