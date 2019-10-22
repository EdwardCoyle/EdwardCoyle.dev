import SiteHead from '../site-head';

// Gutters for layout on this page
const layoutCSS = {
  'maxWidth': '1280px',
  'margin': '0 auto',
  'minHeight': '20px'
};

const WorkSampleLayout = props => (
  <>
    <SiteHead pageTitle={props.pageTitle} />
    <section id="main" className="work-sample" style={layoutCSS}>
      {props.children}
    </section>
  </>
);

export default WorkSampleLayout;
