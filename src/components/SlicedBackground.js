import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const BackGroundHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50vh;
  background: ${props => props.sliceColor};
  z-index: -2;
`;

const SVG = styled.svg`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  /* set height to pixels if you want angle to change with screen width */
`;

class SlicedBackground extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BackGroundHeader sliceColor={this.props.sliceColor}>
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill={this.props.backgroundColor} points="-1,100 100,-1 100,100" />
        </SVG>
      </BackGroundHeader>
    );
  }
}

SlicedBackground.propTypes = {
  sliceColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

SlicedBackground.defaultProps = {};

export default SlicedBackground;
