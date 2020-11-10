import PropTypes from "prop-types";
import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import particlesConfig from "../../assets/particles";
import FlexboxColumn from "../FlexboxColumn";
import FlexboxRow from "../FlexboxRow";
import Section from "./Section";

const Content = styled(FlexboxColumn)`
  z-index: 0;
  padding: 6rem 0;

  height: 100%;
`;

const BackgroundParticles = styled(Particles)`
  position: absolute;
  z-index: -1;

  top: 0%;
  left: 0%;

  width: 100vw;
  height: 100%;

  background: ${(props) => props.theme.dark};
`;

const Headline = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.primary};
  font-weight: 500;
`;

const IntroLine = styled.h2`
  max-width: 512px;

  text-align: center;
  color: ${(props) => props.theme.lightDark};
  font-weight: 600;
`;

const CTALink = styled.a`
  margin: 2rem 0;
  color: ${(props) => props.theme.light};

  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

function HeadSection({ me }) {
  return (
    <Section
      id={"welcome"}
      animatedBackground={<BackgroundParticles params={particlesConfig} />}
    >
      <Content justifyContent="center" alignItems="center">
        <Headline>Greetings good people!</Headline>

        <FlexboxRow alignItems={"center"}>
          <IntroLine>
            I'm {me.firstName} {me.lastName} a beginner front-end engineer.
          </IntroLine>
        </FlexboxRow>

        <CTALink target={"_self"} href={"#about-me"}>
          Learn More
        </CTALink>
      </Content>
    </Section>
  );
}

HeadSection.propTypes = {
  me: PropTypes.object.isRequired,
};

export default HeadSection;
