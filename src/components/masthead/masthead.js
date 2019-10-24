import React from 'react';
import anime from 'animejs';

import EdLogoComponent from '../../animations/ed/ed';
import MastheadBullet from './bullet';
import MastheadSpacer from './spacer';

class Masthead extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.state || {};
    this.containerElem = React.createRef();
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  componentDidUpdate() {
    if (this.state.loaded && !this.state.animated) {
      anime({
        targets: this.containerElem.current,
        scale: [0, 1],
        easing: 'easeOutElastic',
        delay: 1000,
        duration: 1000
      });
      this.setState({ animated: true });
    }
  }

  render () {
    const show = this.state.loaded ? ' is-displayed' : '';
    const fullClassName = `masthead${show}`;
    return (
      <div ref={this.containerElem} className={fullClassName}>
        <EdLogoComponent />
        <h1 className="masthead--heading">Edward Coyle</h1>
        <div className="masthead--bullets">
          <MastheadBullet>Developer</MastheadBullet>
          <MastheadSpacer />
          <MastheadBullet>Designer</MastheadBullet>
          <MastheadSpacer />
          <MastheadBullet>Animator</MastheadBullet>
        </div>
      </div>
    );
  }
}

export default Masthead;
