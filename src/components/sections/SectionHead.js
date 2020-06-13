import PropTypes from "prop-types";
import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import particlesConfig from "../../assets/particles";
import FlexboxColumn from "../FlexboxColumn";
import Section from "./Section";

const ContentCenter = styled(FlexboxColumn)`
  margin: auto;
  z-index: 0;
`;

const BackgroundParticles = styled(Particles)`
  position: absolute;
  background: linear-gradient(to bottom, #312952 0%, #5a4a94 35%, #7b6bc6 100%);
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

function SectionHead(props) {
  return (
    <Section
      animatedBackground={<BackgroundParticles params={particlesConfig} />}
    >
      <ContentCenter justifyContent={"center"} alignItems={"center"}>
        {props.children}
      </ContentCenter>
    </Section>
  );
}

SectionHead.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionHead;
