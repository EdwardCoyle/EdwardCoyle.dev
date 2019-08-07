import '../src/styles.scss';
import fetch from 'isomorphic-unfetch';

import BlogLayout from '../src/components/site-layouts/blog';
import PostNavLink from '../src/components/nav-posts/link';

function Blog(props) {
  const postNavLinks = props.posts.map(post => (
    <PostNavLink key={post.id} id={post.id} name={post.name} title={post.title} />
  ));

  return (
    <BlogLayout pageTitle="Blog Posts Index">
      <h1>Blog Posts:</h1>
      <nav className="main-site-nav">
        <ul>
          {postNavLinks}
        </ul>
      </nav>
    </BlogLayout>
  );
}

Blog.getInitialProps = async function ({ req }) {
  const res = await fetch(`http://localhost:3000/api/blog-posts`);
  const data = await res.json();

  console.log(`(${data.length}) records were fetched`);
  debugger;

  return {
    posts: data
  };
};

export default Blog;
