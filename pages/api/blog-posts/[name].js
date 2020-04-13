import { sanitizePostName } from '../../../src/core/utils/posts';
import { posts } from '../../../src/data/posts';

// Node libs
const fm = require('front-matter');
const fs = require('fs');
const path = require('path');

export default async (req, res) => {
  const postName = sanitizePostName(req.query.name);

  function missingFileError() {
    res.status(404).json({ error: 'No corresponding Markdown file found.' });
  }

  const mdFilePath = path.resolve('src', 'content', 'posts', `${postName}.md`);
  try {
    if (fs.existsSync(mdFilePath)) {
      // Find the corresponding Markdown file
      const postMarkdown = fs.readFileSync(mdFilePath, 'utf8');
      let postData;

      if (typeof postMarkdown === 'string') {
        const frontmatterObj = fm(postMarkdown);
        postData = frontmatterObj.attributes;
        postData.content = frontmatterObj.body;
        res.status(200).json(postData);
      } else {
        missingFileError();
      }
    }
  } catch(err) {
    missingFileError();
  }
}
