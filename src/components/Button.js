import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ButtonContainer = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;
  border-radius: 4px;

  font-family: ${props => props.theme.fontFamily};
  font-size: 1em;
  font-weight: 700;

  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.0515em;

  padding: 1rem 2rem;

  overflow: hidden;

  background: ${props =>
    props.inverted ? props.theme[props.hoverColor] : props.theme[props.color]};
  color: ${props => props.theme.light};

  transition: 0.4s ease;

  &:after {
    content: '';

    position: absolute;
    z-index: -1;
    left: -10%;
    bottom: 0%;

    height: 120%;
    width: 0;

    background: ${props =>
      props.inverted
        ? props.theme[props.color]
        : props.theme[props.hoverColor]};
    transform: skewX(15deg);
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

function PureButton({ className, color, hoverColor, label, onClick, type }) {
  return (
    <ButtonContainer
      className={className}
      onClick={onClick}
      color={color}
      hoverColor={hoverColor}
      type={type}
    >
      {label}
    </ButtonContainer>
  );
}

function Button(props) {
  const hasLink = props.to != null;
  let external = false;

  if (hasLink) {
    external = props.to.includes('https');
  }

  return (
    <>
      {hasLink ? (
        <>
          {external ? (
            <form action={props.to} className={props.className}>
              <PureButton {...props} type={'submit'} />
            </form>
          ) : (
            <Link to={props.to} className={props.className}>
              <PureButton {...props} />
            </Link>
          )}
        </>
      ) : (
        <PureButton {...props} />
      )}
    </>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

Button.defaultProps = {
  color: `#fafafa`,
  hoverColor: `#181818`,
  label: `Button`,
  to: null,
};

export default Button;
