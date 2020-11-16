import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const Rect = styled(motion.div)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;

  background: ${(props) => `${props.theme[props.color]}`} !important;
  filter: hue-rotate(35deg);
`;

const variants = {
  visible: { y: "100%", transition: { ease: "easeIn", duration: 0.45 } },
  hidden: { y: 0, transition: { ease: "easeIn", duration: 0.45 } },
};

export default function Curtain({ color }) {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <Rect
      ref={ref}
      variants={variants}
      initial={"hidden"}
      animate={inView ? "visible" : "hidden"}
      color={color}
    />
  );
}

Curtain.propTypes = {
  color: PropTypes.string,
};

Curtain.defaultProps = {
  color: "black",
};
