const shapesSVG = require('./ed-logo-02.svg');

function EdLogoComponent() {
  return (
    <>
      <object className="ed-logo" type="image/svg+xml" data={shapesSVG} role="img" aria-label="ed-logo">
        <div role="img" className="logo fallback-image" aria-label="ed-logo"></div>
      </object>
    </>
  );
}

export default EdLogoComponent;
