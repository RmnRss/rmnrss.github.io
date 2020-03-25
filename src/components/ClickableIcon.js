import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const IconContainer = styled.a`
  color: ${props => props.color};
  transition: color 0.3s ease-out;

  &:visited {
    color: ${props => props.color};
  }

  &:hover {
    color: ${props => props.hoverColor};
  }
`;

class ClickableIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <IconContainer
        color={this.props.color}
        hoverColor={this.props.hoverColor}
        href={this.props.href}
      >
        <i
          style={{
            fontSize: this.props.size,
            margin: this.props.size / 2,
          }}
          className={this.props.iconName}
        />
      </IconContainer>
    );
  }
}

ClickableIcon.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  href: PropTypes.string,
  iconName: PropTypes.string,
  size: PropTypes.number,
};

ClickableIcon.defaultProps = {
  color: '#181818',
  hoverColor: '#FEBE81',
  size: 16,
};

export default ClickableIcon;
