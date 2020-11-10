import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import breakpoints from "../../utils/breakpoints";

const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.35;

  margin: 0;
  color: ${props => props.theme[props.color]};

  @media screen and (max-width: ${breakpoints.md}px) {
    font-size: 3rem;
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    font-size: 4rem;
    line-height: 1.15;
  }

  @media screen and (max-width: ${breakpoints.xsm}px) {
    font-size: 3rem;
    line-height: 1;
  }
`;

function SectionTitle({ className, color, children }) {
  return (
    <Title className={className} color={color}>
      {children}
    </Title>
  );
}

SectionTitle.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

SectionTitle.defaultProps = {
  color: "light",
};

export default SectionTitle;
