import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const preparedModulesPath = path.join(__dirname, 'preparedModules');
export const modulesPath = path.join(__dirname, 'modules');
export const modules = [
  {
    name: 'guessir',
    packageManager: 'npm',
    updatable: true,
    gitBranch: 'main',
    modulePath: path.join(modulesPath, 'guessir'),
    preparedModuleFolders: [
      {
        moduleTakeawayPath: path.join(modulesPath, 'guessir/packages/web/dist'),
        localPreparedModuleFolderName: 'guessir-web-dist',
      },
      {
        moduleTakeawayPath: path.join(modulesPath, 'guessir/packages/backend/dist'),
        localPreparedModuleFolderName: 'guessir-backend-dist',
      },
    ],
  }
];

export const filterModulesByName = (name) => modules.filter(({ name: nameToCheck }) => name === nameToCheck);

export const getModulesFilteredByNameFromCli = () => {
  const moduleName = process.argv[2];

  if (!moduleName) {
    return modules;
  }

  return filterModulesByName(moduleName);
};
