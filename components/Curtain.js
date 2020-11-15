import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Rect = styled(motion.div)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;

  background: ${(props) => `${props.theme[props.color]}`} !important;
  filter: hue-rotate(35deg);
`;

export default function Curtain({ color }) {
  return (
    <AnimatePresence>
      <Rect
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ ease: "easeIn", duration: 0.45 }}
        exit={{ y: 0 }}
        color={color}
      />
    </AnimatePresence>
  );
}

Curtain.propTypes = {
  color: PropTypes.string,
};

Curtain.defaultProps = {
  color: "black",
};
