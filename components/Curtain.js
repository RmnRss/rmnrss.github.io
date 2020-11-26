import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const Grid = styled(motion.div)`
  position: absolute;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;

const Rect = styled(motion.div)`
  width: 100%;
  height: 100%;

  overflow: hidden;

  background: ${(props) => `${props.theme[props.color]}`} !important;
`;

const cardVariants = {
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsDown = {
  visible: { y: "100%", transition: { ease: "easeIn", duration: 0.45 } },
  hidden: { y: 0, transition: { ease: "easeIn", duration: 0.45 } },
};

export default function Curtain({ color }) {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <Grid
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      initial={"hidden"}
      variants={cardVariants}
    >
      <Rect variants={variantsDown} initial={"hidden"} color={color} />
      <Rect variants={variantsDown} initial={"hidden"} color={color} />
      <Rect variants={variantsDown} initial={"hidden"} color={color} />
      <Rect variants={variantsDown} initial={"hidden"} color={color} />
    </Grid>
  );
}

Curtain.propTypes = {
  color: PropTypes.string,
};

Curtain.defaultProps = {
  color: "darkLight",
};
