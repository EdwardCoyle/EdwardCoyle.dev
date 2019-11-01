import SiteHead from '../site-head';
import Masthead from '../masthead/masthead';
import SVGIcons from '../svg-icons';

const BlogListLayout = props => (
  <>
    <SiteHead pageTitle={props.pageTitle} />
    <SVGIcons />
    <Masthead />
    <section id="main" className="blog-list">
      {props.children}
    </section>
  </>
);

export default BlogListLayout;
