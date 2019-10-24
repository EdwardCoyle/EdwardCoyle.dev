import React from 'react';
import anime from 'animejs';

import EdLogoComponent from '../../animations/ed/ed';
import InteractiveLogoBullet from './bullet';
import InteractiveLogoSpacer from './spacer';

class InteractiveLogo extends React.Component {
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
    const fullClassName = `interactive-logo${show}`;
    return (
      <div ref={this.containerElem} className={fullClassName}>
        <EdLogoComponent />
        <h1 className="interactive-logo--heading">Edward Coyle</h1>
        <div className="interactive-logo--bullets">
          <InteractiveLogoBullet>Developer</InteractiveLogoBullet>
          <InteractiveLogoSpacer />
          <InteractiveLogoBullet>Designer</InteractiveLogoBullet>
          <InteractiveLogoSpacer />
          <InteractiveLogoBullet>Animator</InteractiveLogoBullet>
        </div>
      </div>
    );
  }
}

export default InteractiveLogo;
