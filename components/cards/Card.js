import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  background-color: ${(props) => props.theme[props.backgroundColor]};

  border-radius: ${(props) => props.theme.borderRadius};

  padding: 1rem;
`;

function Card({ backgroundColor, children, ...props }) {
  return (
    <CardContainer backgroundColor={backgroundColor} {...props}>
      {children}
    </CardContainer>
  );
}

Card.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  backgroundColor: "light",
};

export default Card;
