import '../../src/styles.scss';
import chalk from 'chalk';
import fetch from 'isomorphic-unfetch';

import BlogListLayout from '../../src/components/site-layouts/blog-list';
import PostNavLink from '../../src/components/nav-posts/link';

function Edmails(props) {
  const edmails = props.posts.map(post => (
    <PostNavLink key={post.id} id={post.id} name={post.name} title={post.title} />
  ));

  return (
    <BlogListLayout pageTitle="Blog Posts Index">
      <h1>Edmails</h1>
      <nav className="main-site-nav">
        <ul className="edmail-list">
          {edmails}
        </ul>
      </nav>
    </BlogListLayout>
  );
}

Edmails.getInitialProps = async function ({ req }) {
  const res = await fetch(`http://localhost:3000/api/edmails/index`);
  const edmails = await res.json();

  console.log(`[ ${chalk.yellow('server')} ] (${posts.length}) posts were fetched.`);

  return { edmails };
};

export default Edmails;
