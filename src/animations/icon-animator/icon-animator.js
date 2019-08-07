const shapesSVG = require('./icon-animator.svg');

const IconAnimatorComponent = () => (
  <>
  <object className="svg-animation" type="image/svg+xml" data={shapesSVG} role="img" aria-label="icon for animator">
    <div role="img" className="shapes-fallback" aria-label="shapes animation"></div>
  </object>
  </>
);

export default IconAnimatorComponent;
