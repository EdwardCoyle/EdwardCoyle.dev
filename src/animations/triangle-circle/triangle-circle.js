const smallerTriangleSVG = require('./triangle-circle.svg');
const largerTriangelSVG = require('./triangle-circle-larger.svg');

function SVGTriangleCircle(props) {
  const shapeSVG = props.reverse ? largerTriangelSVG : smallerTriangleSVG;

  return (
    <>
      <object className="svg-animation triangle-circle" type="image/svg+xml" data={shapeSVG} role="img" aria-label="triangle-circle animation">
        <div role="img" className="triangle-circle" aria-label="triangle-circle animation"></div>
      </object>
      <style jsx>{`
        .triangle-circle {
          ${ props.background ? `position: absolute;` : '' }

          ${ props.reverse ? `
            top: -20%;
            left: -20%;
            width: 140%;
            height: 140%;

            opacity: .1;

            -webkit-animation: spin 96s linear infinite;
            -moz-animation: spin 96s linear infinite;
            animation: spin 96s linear infinite;
          ` : `
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            opacity: .2;

            -webkit-animation: spin-reverse 48s linear infinite;
            -moz-animation: spin-reverse 48s linear infinite;
            animation: spin-reverse 48s linear infinite;
          `}
        }
      `}</style>
    </>
  );
}

export default SVGTriangleCircle;
