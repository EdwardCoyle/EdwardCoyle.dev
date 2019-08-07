import '../../src/styles.scss';
import fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown';

import BlogLayout from '../../src/components/site-layouts/blog';

const BlogPost = props => {
  const title = props.post.title || 'Blog Post';
  const content = props.post.content || 'This is a blog post';

  return (
    <BlogLayout pageTitle={title}>
      <h1>{title}</h1>
      <p>{content}</p>
    </BlogLayout>
  );
};

BlogPost.getInitialProps = async function(context) {
  const { name } = context.query;
  const res = await fetch(`http://localhost:3000/api/blog-posts`);
  const posts = await res.json();

  let thisPost;
  posts.forEach((post) => {
    if (post.name === name) {
      thisPost = post;
    }
  });

  if (!thisPost) {
    throw new Error(`No post available with name "${name}"`);
  }

  return { post: thisPost };
};

export default BlogPost;
