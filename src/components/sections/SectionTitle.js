import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import breakpoints from "../../utils/breakpoints";
import AnimatedComponentInView from "../AnimatedComponentInView";

const TitlePart = styled.h1`
  font-size: 6.625rem;
  line-height: 1.35;
  letter-spacing: -0.0415em;

  margin: 0;
  color: ${props => props.color};

  opacity: 0;
  transform: translateY(5vh);
  visibility: hidden;
  transition: opacity 0.5s ease-out, transform 1s ease-out;

  &.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }

  @media screen and (max-width: ${breakpoints.md}px) {
    font-size: 4rem;
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    font-size: 3rem;
    line-height: 1.15;
  }
`;

function SectionTitle(props) {
  return (
    <AnimatedComponentInView>
      <TitlePart className={props.className} color={props.color}>
        {props.children}
      </TitlePart>
    </AnimatedComponentInView>
  );
}

SectionTitle.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

SectionTitle.defaultProps = {
  color: "#000",
};

export default SectionTitle;
