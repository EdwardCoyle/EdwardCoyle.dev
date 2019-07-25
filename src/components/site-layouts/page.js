import SiteHead from '../site-head';

const PageLayout = props => (
  <>
    <SiteHead pageTitle={props.pageTitle} />
    <section id="main" className="page">
      {props.children}
    </section>
  </>
);

export default PageLayout;
