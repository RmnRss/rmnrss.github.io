import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../../node_modules/animate.css/animate.min.css'

class AnimatedComponent extends Component {
  constructor(props) {
    super(props);

    this.animateChildren = this.animateChildren.bind(this);
  }

  animateChildren(child, animClass) {
    const className = [child.props.className,
      animClass].join(' ');

    const props = {
      className
    };

    return React.cloneElement(child, props);
  }

  render() {
    return (
      <React.Fragment>
        {React.Children.map(this.props.children, child => this.animateChildren(child, this.props.animationClass))}
      </React.Fragment>
    );
  }
}

AnimatedComponent.propTypes = {
  animationClass: PropTypes.string,
};

AnimatedComponent.defaultProps = {};

export default AnimatedComponent;
