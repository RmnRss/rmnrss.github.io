import React, { Component } from 'react';
import handleViewport from 'react-in-viewport';
import AnimatedComponent from './AnimatedComponent';

class AnimatedElement extends Component {
  constructor(props) {
    super(props);
  }

  getStyle() {
    const { inViewport, enterCount } = this.props;

    if (inViewport && enterCount === 1) {
      return 'is-visible';
    } else {
      return '';
    }
  }

  render() {
    return (
      <AnimatedComponent animationClass={this.getStyle()}>
        {this.props.children}
      </AnimatedComponent>
    );
  }
}

const AnimatedComponentInView = handleViewport(AnimatedElement, {
  rootMargin: '-1.0px',
});

export default AnimatedComponentInView;
