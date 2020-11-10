import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Label = styled(Link)`
  position: relative;
  pointer-events: all;
  margin: 0 1.5rem 0 0;

  font-weight: 600;
  color: ${(props) => props.theme.black};

  transition: all 0.1s ease;

  &:after {
    background-color: ${(props) => props.theme.accentGreen};
    content: "";
    display: block;
    height: 2px;
    opacity: ${(props) => (props.active ? 1 : 0.35)};
    transform-origin: ${(props) => (props.active ? "0 0" : "100% 0")};
    transform: ${(props) => (props.active ? "scaleX(1)" : "scaleX(0)")};
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:after {
    opacity: 1;
    transform-origin: 0 0;
    transform: scaleX(1);
  }
`;

export default function HeaderItem({ label, path, ...props }) {
  return (
    <Label to={path} {...props}>
      {label}
    </Label>
  );
}

HeaderItem.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
