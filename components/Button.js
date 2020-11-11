import { Link } from "next/link";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;
  border-radius: 4px;

  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1em;
  font-weight: 700;

  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.0515em;

  padding: 1rem 2rem;

  overflow: hidden;

  background: ${(props) =>
    props.disabled ? props.theme.grey : props.theme[props.color]};
  color: ${(props) => props.theme.light};

  transition: 0.4s ease;

  &:after {
    content: "";
    display: ${(props) => (props.disabled ? "none" : "block")};

    position: absolute;
    z-index: -1;
    left: -10%;
    bottom: 0%;

    height: 120%;
    width: 0;

    background: ${(props) => props.theme[props.hoverColor]};
    transform: skewX(15deg);
    transition: 0.3s ease;
  }

  &:hover {
    background-color: ${(props) => (props.disabled ? "none" : "transparent")};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  }

  &:hover:after {
    width: 120%;
  }
`;

function PureButton({ className, color, hoverColor, label, ...props }) {
  return (
    <ButtonContainer
      className={className}
      color={color}
      hoverColor={hoverColor}
      {...props}
    >
      {label}
    </ButtonContainer>
  );
}

function Button(props) {
  const hasLink = props.href != null;
  let external = false;

  if (hasLink) {
    external = props.href.includes("https");
  }

  return (
    <>
      {hasLink ? (
        <>
          {external ? (
            <form action={props.href} className={props.className}>
              <PureButton {...props} type={"submit"} />
            </form>
          ) : (
            <Link passHref href={props.href} className={props.className}>
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
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
};

Button.defaultProps = {
  color: `dark`,
  hoverColor: `secondary`,
  href: null,
};

export default Button;
