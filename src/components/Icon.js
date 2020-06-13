import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Container = styled.i`
  color: ${props => props.color};

  font-weight: 500;
  font-size: ${props => `${props.size}px`};
  margin-top: ${props => `${props.margins}px`};

  transition: color 0.3s ease-out;
`;

function Icon(props) {
  const margins = props.size / 2;
  return (
    <Container
      size={props.size}
      margins={margins}
      color={props.color}
      className={props.iconName}
    />
  );
}

Icon.propTypes = {
  color: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Icon.defaultProps = {
  color: "#000",
  size: 16,
};

export default Icon;
