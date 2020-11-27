import PropTypes from "prop-types";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: ${(props) => (props.inView ? "6px" : "0")};

  width: 40px;
  height: 40px;

  margin: 0 2rem 0 0;

  transition: grid-gap 0.3s ease;
`;

const Square = styled.div`
  display: block;
  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme[props.color]};
`;

export default function SquaresTitle({ color, ...props }) {
  const { ref, inView } = useInView({ threshold: 1 });

  return (
    <Container ref={ref} inView={inView} {...props}>
      <Square color={color} />
      <Square color={color} />
      <Square color={color} />
      <Square color={color} />
      <Square color={color} />
      <Square color={color} />
      <Square color={color} />
      <Square color={color} />
      <Square color={color} />
    </Container>
  );
}

SquaresTitle.propTypes = {
  color: PropTypes.string,
};

SquaresTitle.defaultProps = {
  color: "primary",
};
