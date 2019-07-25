import '../src/styles.scss';

import BlogLayout from '../src/components/site-layouts/blog';
import PostNavList from '../src/components/nav-posts/list';

const Blog = props => {
  return (
    <BlogLayout>
      <h1>Blog Posts:</h1>
      <PostNavList />
    </BlogLayout>
  );
};

export default Blog;
