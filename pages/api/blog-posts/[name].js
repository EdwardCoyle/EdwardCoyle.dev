import { sanitizePostName } from '../../../src/core/utils/posts';
import { posts } from '../../../src/data/posts';

export default function handle(req, res) {
  const postName = sanitizePostName(req.query.name);

  // Extract from our list
  let postData;
  posts.forEach((post) => {
    if (!postData && post.name === postName) {
      postData = post;
    }
  });

  // Find the corresponding Markdown file
  debugger;
  const postMarkdown = require(`../../../src/content/posts/${postName}.md`);
  if (postMarkdown && typeof postMarkdown.default === 'string') {
    postData.content = postMarkdown.default;
    res.status(200).json(postData);
  } else {
    res.status(404).json({ error: 'No corresponding Markdown file found.' });
  }
}
