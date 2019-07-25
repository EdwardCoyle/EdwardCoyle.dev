import '../src/styles.scss';

import WorkSampleLayout from '../src/components/site-layouts/work-sample';
import SVGShapesTestComponent from '../src/animations/shapes-test/shapes';

const Animations = () => {
  return (
    <WorkSampleLayout pageTitle="Animation Tests">
      <h1>Shape Animation Test</h1>
      <SVGShapesTestComponent className="img"/>
    </WorkSampleLayout>
  );
};

export default Animations;
