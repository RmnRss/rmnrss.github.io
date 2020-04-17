import PropTypes from 'prop-types';
import React, { Component } from 'react';
import handleViewport from 'react-in-viewport';
import '../../node_modules/animate.css/animate.min.css';
import AnimatedComponent from './AnimatedComponent';

class AnimatedElement extends Component {
  constructor(props) {
    super(props);
  }

  getStyle() {
    const { inViewport, enterCount } = this.props;

    if (inViewport && enterCount === 1) {
      return this.props.animationClass;
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

AnimatedElement.propTypes = {
  animationClass: PropTypes.string,
};

AnimatedElement.defaultProps = {
  animationClass: '',
};

export default AnimatedComponentInView;
