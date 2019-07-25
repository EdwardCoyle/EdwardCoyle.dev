import SiteHead from '../site-head';

const BlogLayout = props => (
  <>
    <SiteHead pageTitle={props.pageTitle} />
    <section id="main" className="blog">
      {props.children}
    </section>
  </>
);

export default BlogLayout;
