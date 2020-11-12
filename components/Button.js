import Link from "next/link";
import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styled from "styled-components";
import ExternalLink from "./ExternalLink";

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;
  border-radius: 0;

  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1em;
  font-weight: 700;

  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.0515em;

  padding: 0.5rem 1.5rem;

  background: ${(props) =>
    props.disabled ? props.theme.grey : props.theme[props.color]};
  color: ${(props) => props.theme.light};

  &:after {
    background: ${(props) => `${props.theme[props.color]}`};
    filter: hue-rotate(35deg);
  }

  &:hover {
    background-color: ${(props) => (props.disabled ? "none" : "transparent")};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  }
`;

const PureButton = forwardRef(
  ({ children, className, color, type, ...props }, ref) => (
    <ButtonContainer
      ref={ref}
      className={`${className} swoop-in`}
      color={color}
      type={type || "button"}
      {...props}
    >
      {children}
    </ButtonContainer>
  )
);

const Button = ({ as, children, className, href, ...props }) => {
  if (href != null) {
    const external = href.includes("https");
    return (
      <>
        {external ? (
          <ExternalLink href={href} className={className}>
            <PureButton {...props}>{children}</PureButton>
          </ExternalLink>
        ) : (
          <Link passHref href={href} as={as}>
            <PureButton className={className} {...props}>
              {children}
            </PureButton>
          </Link>
        )}
      </>
    );
  } else {
    return (
      <PureButton className={className} {...props}>
        {children}
      </PureButton>
    );
  }
};

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  href: PropTypes.string,
};

Button.defaultProps = {
  as: null,
  color: `dark`,
  href: null,
};

export default Button;
