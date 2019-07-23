const shapesSVG = require('./shapes.svg');

function SVGShapesTestComponent() {
  return (
    <>
      <object className="svg-animation" type="image/svg+xml" data={shapesSVG} role="img" aria-label="shapes animation">
        <div role="img" className="shapes-fallback" aria-label="shapes animation"></div>
      </object>
    </>
  );
}

export default SVGShapesTestComponent;
