import PropTypes from 'prop-types';
import React, { Component } from 'react';

class AnimatedComponent extends Component {
  constructor(props) {
    super(props);

    this.animateChildren = this.animateChildren.bind(this);
  }

  /***
   * Adds the animation class to the children of the component
   */
  animateChildren(child, animClass) {
    const className = [child.props.className, animClass].join(' ');

    const props = {
      className,
    };

    return React.cloneElement(child, props);
  }

  render() {
    return (
      <React.Fragment>
        {React.Children.map(this.props.children, child =>
          this.animateChildren(child, this.props.animationClass)
        )}
      </React.Fragment>
    );
  }
}

AnimatedComponent.propTypes = {
  animationClass: PropTypes.string.isRequired,
};

export default AnimatedComponent;
