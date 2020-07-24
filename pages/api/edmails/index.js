const fs = require('fs');
const path = require('path');
const glob = require('glob');

// List of paths
const GLOB_PATH = `${path.join('public', 'snd', 'ogg', '*.ogg')}`;

// Glob Options
const GLOB_OPTS = {};

/**
 *  Edmails API
 */
export default async (req, res) => {
  glob(GLOB_PATH, GLOB_OPTS, (err, files) => {
    let edmailsData = [];
    let total = 0;

    files.forEach((filePath) => {
      const fileInfo = fs.statSync(filePath);
      const id = total; //fileInfo.uid;
      const name = filePath.split(path.sep).pop();
      const datetime = filePath.split(path.sep)[1];
      const folder = filePath.replace(name, '');
      const imgPath = '';

      edmailsData.push({
        path: filePath,
        id,
        name,
        datetime,
        folder,
        fileInfo,
        imgPath,
      });

      total++;
    });

    // Sort descending by the date string provided in the filename.
    // TODO: Get better data for this from the actual file
    edmailsData = edmailsData.sort((a, b) => {
      const dateA = Number(new Date(a));
      const dateB = Number(new Date(b));

      return dateB - dateA;
    });

    res.status(200).json(edmailsData);
  });
};
