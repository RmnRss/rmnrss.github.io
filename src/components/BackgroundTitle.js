import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import handleViewport from 'react-in-viewport';
import '../../node_modules/animate.css/animate.min.css';

const Element = styled.h1`
  position: relative;
  margin: 2rem 0 0 0;

  z-index: -1;

  font-family: 'Poppins', sans-serif;
  font-size: 8em;
  font-weight: bold;
  line-height: 8rem;
  text-align: center;
  text-transform: uppercase;

  color: ${props => props.color};

  @media screen and (max-width: 768px) {
    font-size: 5em;
    line-height: 5rem;
  }
  
  @media screen and (max-width: 512px) {
    font-size: 3em;
    line-height: 3rem;
  }
`;

class AnimatedBackgroundTitle extends Component {
  constructor(props) {
    super(props);
  }

  getStyle() {
    const { inViewport } = this.props;
    //Fade in only the first time we enter the viewport
    if (inViewport) {
      return 'animated slideInUp';
    } else {
      return '';
    }
  }

  render() {
    return (
      <Element className={this.getStyle()} color={this.props.color}>
        {this.props.label}
      </Element>
    );
  }
}

const BackgroundTitle = handleViewport(AnimatedBackgroundTitle, {
  rootMargin: '-1.0px',
});

AnimatedBackgroundTitle.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
};

AnimatedBackgroundTitle.defaultProps = {
  label: ``,
  color: `#ececec`,
};

export default BackgroundTitle;
