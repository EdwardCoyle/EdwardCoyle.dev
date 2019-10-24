import React, { useState } from 'react';
import anime from 'animejs';

/**
 * These are the animated bullet points used on the Masthead.
 * TODO: convert to straight-up React component
 */
class MastheadBullet extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.state || {};
    this.containerElem = React.createRef();

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentDidUpdate() {
    this.animateScale();
  }

  animateScale = () => {
    anime({
      targets: this.containerElem.current,
      scale: (this.state.hover ? 1.5 : 1),
      easing: 'easeOutSine',
      duration: 100
    });
  };

  handleMouseOver() {
    this.setState({
      hover: true
    });
  }

  handleMouseOut() {
    this.setState({
      hover: false
    });
  }

  render() {
    const hoveredClass = this.state.scale ? 'is-hovered' : '';
    const fullClassName = `masthead--bullet ${hoveredClass}`;


    return (
      <div
        className={fullClassName}
        ref={this.containerElem}
        onMouseOut={this.handleMouseOut}
        onMouseOver={this.handleMouseOver}>
        {this.props.children}
      </div>
    );
  }
};

MastheadBullet

export default MastheadBullet;
