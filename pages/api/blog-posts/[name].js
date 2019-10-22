import { sanitizePostName } from '../../../src/core/utils/posts';
import { posts } from '../../../src/data/posts';

// Node libs
const fs = require('fs');
const path = require('path');

export default function handle(req, res) {
  const postName = sanitizePostName(req.query.name);

  // Extract from our list
  let postData;
  posts.forEach((post) => {
    if (!postData && post.name === postName) {
      postData = post;
    }
  });

  function missingFileError() {
    res.status(404).json({ error: 'No corresponding Markdown file found.' });
  }

  const mdFilePath = path.resolve('src', 'content', 'posts', `${postName}.md`);
  try {
    if (fs.existsSync(mdFilePath)) {
      // Find the corresponding Markdown file
      const postMarkdown = fs.readFileSync(mdFilePath, 'utf8');
      if (typeof postMarkdown === 'string') {
        postData.content = postMarkdown;
        res.status(200).json(postData);
      } else {
        missingFileError();
      }
    }
  } catch(err) {
    missingFileError();
  }
}
