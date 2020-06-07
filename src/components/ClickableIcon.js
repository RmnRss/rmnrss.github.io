import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.a`
  color: ${props => props.color};
  font-weight: 500;

  transition: color 0.3s ease-out, transform 0.3s ease-out;

  &:visited {
    color: ${props => props.color};
  }

  &:hover {
    transform: scale(1.1);
    color: ${props => props.hoverColor};
  }
`;

const ClickableIcon = ({ color, hoverColor, href, iconName, size }) => {
  return (
    <IconContainer
      color={color}
      hoverColor={hoverColor}
      href={href}
      target="_blank"
    >
      <i
        style={{
          fontSize: size,
          margin: size / 2,
        }}
        className={iconName}
      />
    </IconContainer>
  );
};

ClickableIcon.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  href: PropTypes.string,
  iconName: PropTypes.string,
  size: PropTypes.number,
};

ClickableIcon.defaultProps = {
  color: '#000',
  hoverColor: '#CCC',
  size: 16,
};

export default ClickableIcon;
