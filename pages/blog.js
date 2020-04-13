import '../src/styles.scss';
import chalk from 'chalk';
import fetch from 'isomorphic-unfetch';

import BlogListLayout from '../src/components/site-layouts/blog-list';
import PostNavLink from '../src/components/nav-posts/link';

function Blog(props) {
  const postNavLinks = props.posts.map(post => (
    <PostNavLink key={post.id} id={post.id} name={post.name} title={post.title} />
  ));

  return (
    <BlogListLayout pageTitle="Blog Posts Index">
      <h1>Blog Posts:</h1>
      <nav className="main-site-nav">
        <ul className="post-links">
          {postNavLinks}
        </ul>
      </nav>
    </BlogListLayout>
  );
}

Blog.getInitialProps = async function ({ req }) {
  const res = await fetch(`http://localhost:3000/api/blog-posts/index`);
  const posts = await res.json();

  console.log(`[ ${chalk.yellow('server')} ] (${posts.length}) posts were fetched.`);

  return { posts };
};

export default Blog;
