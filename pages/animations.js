import '../src/styles.scss';

import WorkSampleLayout from '../src/components/site-layouts/work-sample';
import SVGShapesTestComponent from '../src/animations/shapes-test/shapes';
import IconAnimatorComponent from '../src/animations/icon-animator/icon-animator';

const Animations = () => {
  return (
    <WorkSampleLayout pageTitle="Animation Tests">
      <h1>Shape Animation Test</h1>
      <SVGShapesTestComponent className="img"/>
      <IconAnimatorComponent className="img" />
    </WorkSampleLayout>
  );
};

export default Animations;
