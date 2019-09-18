import '../../src/styles.scss';
import fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown';

import { sanitizePostName } from '../../src/core/utils/posts';
import BlogLayout from '../../src/components/site-layouts/blog';

const BlogPost = props => {
  const title = props.post.title || 'Blog Post';
  const content = props.post.content || 'This is a blog post';

  return (
    <BlogLayout pageTitle={title}>
      <ReactMarkdown
        source={content}
        escapeHtml={false}
      />
    </BlogLayout>
  );
};

BlogPost.getInitialProps = async function(context) {
  debugger;
  const { name } = context.query;
  const postName = sanitizePostName(name);

  const res = await fetch(`http://localhost:3000/api/blog-posts/${postName}`);
  const post = await res.json();

  if (!postName) {
    throw new Error(`No post available with name "${postName}"`);
  }

  return { post };
};

export default BlogPost;
