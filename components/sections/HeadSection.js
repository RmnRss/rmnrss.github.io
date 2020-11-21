import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Breakpoints from "../../utils/breakpoints";
import Button from "../Button";
import FlexboxColumn from "../FlexboxColumn";
import FlexboxRow from "../FlexboxRow";
import Section from "./Section";

const FullScreenSection = styled(Section)`
  width: 100vw;
  max-width: 100%;

  height: 100vh;
  max-height: 100%;
`;

const Content = styled(FlexboxColumn)`
  z-index: 0;
  padding: 6rem 0;

  height: 100%;
`;

const Headline = styled.h1`
  color: ${(props) => props.theme.primary};
  font-weight: 600;
`;

const IntroLine = styled.h2`
  max-width: 512px;

  color: ${(props) => props.theme.lightDark};
  font-weight: 500;
`;

const CTARow = styled.div`
  display: flex;
  grid-gap: 1.5rem;

  margin: 2.5rem 0;

  @media screen and (max-width: ${Breakpoints.sm}px) {
    flex-direction: column;
  }
`;

function HeadSection({ me }) {
  return (
    <FullScreenSection id={"welcome"} backgroundColor={"dark"}>
      <Content justifyContent={"center"}>
        <Headline>Greetings good people!</Headline>

        <FlexboxRow>
          <IntroLine>
            I'm {me.firstName} {me.lastName} a beginner front-end engineer.
          </IntroLine>
        </FlexboxRow>

        <CTARow target={"_self"} href={"#about-me"}>
          <Link passHref href={"/about-me"}>
            <Button color={"primary"}>About Me</Button>
          </Link>

          <Link passHref href={"/#work"}>
            <Button color={"accentPurple"}>My Work</Button>
          </Link>
        </CTARow>
      </Content>
    </FullScreenSection>
  );
}

HeadSection.propTypes = {
  me: PropTypes.object.isRequired,
};

export default HeadSection;
