import EdLogoComponent from '../../animations/ed/ed';

import LogoBullet from '../logo/bullet';
import LogoSpacer from '../logo/spacer';

const Masthead = (props) => {
  return (
    <div className="masthead">
      <EdLogoComponent />

      <div className="masthead--logo">
        <h1 className="masthead--heading">Edward Coyle</h1>
        <div className="masthead--bullets">
          <LogoBullet>Developer</LogoBullet>
          <LogoSpacer />
          <LogoBullet>Designer</LogoBullet>
          <LogoSpacer />
          <LogoBullet>Animator</LogoBullet>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
