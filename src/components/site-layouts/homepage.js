import SiteHead from '../site-head';

const HomepageLayout = props => (
  <>
    <SiteHead pageTitle="Coming Soon"/>
    <section id="main" className="main">
      {props.children}
    </section>
  </>
);

export default HomepageLayout;
