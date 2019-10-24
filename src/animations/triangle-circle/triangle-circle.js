import React from 'react';

const smallerTriangleSVG = require('./triangle-circle.svg');
const largerTriangleSVG = require('./triangle-circle-larger.svg');

// NOTE: React.forwardRef is needed to make component instances work with animations:
// https://github.com/hyperfuse/react-anime/issues/52
const SVGTriangleCircle = React.forwardRef((props, ref) => {
  const shapeSVG = props.reverse ? largerTriangleSVG : smallerTriangleSVG;

  return (
    <div ref={ref} className="triangle-circle--container">
      <object className="svg-animation triangle-circle" type="image/svg+xml" data={shapeSVG} role="img" aria-label="triangle-circle animation">
        <div role="img" className="triangle-circle" aria-label="triangle-circle animation"></div>
      </object>
      <style jsx>{`
        .triangle-circle--container {
          height: 100%;
          position: absolute;
          width: 100%;
        }

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
    </div>
  );
});

export default SVGTriangleCircle;
