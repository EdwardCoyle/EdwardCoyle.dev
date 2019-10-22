import '../src/styles.scss';

import WorkSampleLayout from '../src/components/site-layouts/work-sample';
import SVGShapesTestComponent from '../src/animations/shapes-test/shapes';
import SVGTriangleCircle from '../src/animations/triangle-circle/triangle-circle';
import IconAnimatorComponent from '../src/animations/icon-animator/icon-animator';

const Animations = () => {
  return (
    <WorkSampleLayout pageTitle="Animation Tests">
      <h1>Shape Animation Test</h1>
      <SVGTriangleCircle className="img" />
      <SVGShapesTestComponent className="img"/>
      <IconAnimatorComponent className="img" />
    </WorkSampleLayout>
  );
};

export default Animations;
