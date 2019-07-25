import '../../src/styles.scss';

import { useRouter } from 'next/router';

import PageLayout from '../../src/components/site-layouts/page';
import SiteNavLink from '../../src/components/site-nav-link';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PageLayout>
      <h1>{router.query.id || "Blog Post"}</h1>
      <p>{"This is a blog post."}</p>
    </PageLayout>
  );
};

export default BlogPost;
