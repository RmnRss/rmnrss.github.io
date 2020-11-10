import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import ExternalLink from "./ExternalLink";
import Icon from "./Icon";

const Container = styled(ExternalLink)`
  transition: transform 0.2s ease-out;
  color: ${(props) => props.theme[props.color]};

  line-height: 1;

  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    color: ${(props) => props.theme[props.hoverColor]};
  }
`;

export default function ClickableIcon({ href, ...props }) {
  return (
    <Container href={href}>
      <Icon {...props} />
    </Container>
  );
}

ClickableIcon.propTypes = {
  href: PropTypes.string,
};
