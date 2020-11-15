import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import particlesConfig from "../../styles/particles";
import Breakpoints from "../../utils/breakpoints";
import Button from "../Button";
import FlexboxColumn from "../FlexboxColumn";
import FlexboxRow from "../FlexboxRow";
import SocialIcons from "../SocialIcons";
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

const CTARow = styled.div`
  display: flex;
  grid-gap: 1rem;

  margin: 3rem 1rem;

  @media screen and (max-width: ${Breakpoints.sm}px) {
    flex-direction: column;
  }
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

        <SocialIcons iconSize={24} color={"light"} />

        <CTARow target={"_self"} href={"#about-me"}>
          <Link passHref href={"/about-me"}>
            <Button color={"primary"}>About Me</Button>
          </Link>

          <Link passHref href={"/work"}>
            <Button color={"accentPurple"}>My Work</Button>
          </Link>
        </CTARow>
      </Content>
    </Section>
  );
}

HeadSection.propTypes = {
  me: PropTypes.object.isRequired,
};

export default HeadSection;
