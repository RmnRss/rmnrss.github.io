import React from "react";
import styled from "styled-components";
import HobbyCard from "../components/cards/HobbyCard";
import FlexboxRow from "../components/FlexboxRow";
import MainLayout from "../components/layouts/MainLayout";
import MarkdownRenderer from "../components/MarkdownRenderer";
import Section from "../components/sections/Section";
import { getContentTypeEntries, getSingleEntry } from "../services/contentful";
import theme from "../styles/theme";
import Breakpoints from "../utils/breakpoints";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, 1fr);
  grid-gap: 1.5rem;

  margin: 2rem 0;

  @media screen and (max-width: ${Breakpoints.xlg}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${Breakpoints.md}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theme[props.color]};
`;

export default function AboutMePage({ me, hobbies }) {
  console.log(me.bio);
  return (
    <MainLayout title="" description="">
      <Section id={"about-me"} backgroundColor={"lightBlue"}>
        <Title color={"dark"}>About Me</Title>

        <FlexboxRow justifyContent={"center"} alignItems={"center"}>
          <MarkdownRenderer document={me.bio} />
        </FlexboxRow>
      </Section>

      <Section id={"hobbies"} backgroundColor={"light"}>
        <Title color={"dark"}>Some of my hobbies</Title>

        <CardGrid col={2}>
          {hobbies.map((hobby, index) => {
            return (
              <HobbyCard
                key={hobby.sys.id}
                color={theme.allAccents[index]}
                hobby={hobby.fields}
              />
            );
          })}
        </CardGrid>
      </Section>
    </MainLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      me: await getSingleEntry("3s36kiP3mua8eAXRnWorT6"),
      hobbies: await getContentTypeEntries("hobby"),
    },
    revalidate: 3000,
  };
}
