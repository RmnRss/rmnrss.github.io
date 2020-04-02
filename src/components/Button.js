import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import FlexboxRow from './FlexboxRow';

const ButtonContainer = styled(FlexboxRow)`
  position: relative;

  padding: 1rem 2rem;

  overflow: hidden;

  background-color: ${props => props.backgroundColor};

  border-radius: 4px;

  transition: 0.4s ease;

  &:after {
    position: absolute;
    content: '';
    height: 120%;
    width: 0;
    left: -10%;
    bottom: 0%;
    background: ${props => props.hoverBackgroundColor};
    transform: skewX(15deg);
    z-index: -1;
    transition: 0.3s ease;
  }

  &:hover {
    background-color: transparent;
    cursor: pointer;
  }

  &:hover:after {
    width: 120%;
  }
`;

const Label = styled.b`
  font-size: 1em;

  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.0515em;
  color: ${props => props.color};

  transition: color 0.4s ease;

  ${ButtonContainer}:hover & {
    color: ${props => props.hoverColor};
  }
`;

const Button = ({
  backgroundColor,
  color,
  className,
  hoverBackgroundColor,
  hoverColor,
  label,
  onClick,
}) => {
  return (
    <ButtonContainer
      className={className}
      onClick={onClick}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Label color={color} hoverColor={hoverColor}>
        {label}
      </Label>
    </ButtonContainer>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  hoverColor: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: `#181818`,
  color: `#fafafa`,
  hoverBackgroundColor: `#fafafa`,
  hoverColor: `#181818`,
  label: `Button`,
};

export default Button;
