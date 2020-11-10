import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import FlexboxRow from "./FlexboxRow";
import Icon from "./Icon";

const Container = styled(FlexboxRow)`
  width: max-content;

  padding: 6px 16px;

  font-size: 16px;
  font-weight: 600;

  background-color: ${(props) => props.theme[props.color]};

  transition: all 0.2s ease-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.14);
  }
`;

const CheckIcon = styled(Icon)`
  margin: 0 0.5rem 0 0;
`;

export default function Chip({ color, label, selected, ...props }) {
  return (
    <Container
      alignItems={"center"}
      justifyContent={"center"}
      color={color}
      {...props}
    >
      {selected && <CheckIcon name={"check"} size={24} color={"light"} />}

      {label}
    </Container>
  );
}

Chip.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
};

Chip.defaultProps = {
  color: "dark",
  selected: false,
};
