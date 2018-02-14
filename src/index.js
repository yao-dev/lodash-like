import fs from 'fs';
import path from 'path';

const toExport = {};
const dirName = path.basename(__dirname);
const directories = fs.readdirSync(dirName);

for (const directory of directories) {
  const currentFolder = path.join(dirName, directory);
  const statsDir = fs.lstatSync(currentFolder);

  if (statsDir.isDirectory()) {
    const files = fs.readdirSync(currentFolder);

    if (files) {
      for (const file of files) {
        const currentFile = path.join(currentFolder, file);
        const stats = fs.lstatSync(currentFile);

        if (stats && stats.isFile() && !currentFile.endsWith('.test.js')) {
          const fileBaseName = file.slice(0, -3);
          const module = require(`./${directory}/${fileBaseName}`);

          toExport[fileBaseName] = module.default || module;
        }
      }
    }
  }
}

export default toExport;
