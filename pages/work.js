import React from "react";
import styled from "styled-components";
import CaseStudyCard from "../components/cards/CaseStudyCard";
import ProjectCard from "../components/cards/ProjectCard";
import MainLayout from "../components/layouts/MainLayout";
import Section from "../components/sections/Section";
import SkillsSection from "../components/sections/SkillsSection";
import { getContentTypeEntries } from "../services/contentful";
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

export default function WorkPage({ caseStudies, projects, skillCategories }) {
  return (
    <MainLayout title="" description="">
      <Section id={"case-studies"} backgroundColor={theme.lightDark}>
        <Title color={"light"}>Case Studies</Title>

        <CardGrid col={3}>
          {caseStudies.map((caseStudy) => {
            return (
              <CaseStudyCard
                key={caseStudy.sys.id}
                caseStudy={caseStudy.fields}
              />
            );
          })}
        </CardGrid>

        <Title color={"light"}>Other Stuff</Title>

        <CardGrid col={3}>
          {projects.map((project) => {
            return (
              <ProjectCard key={project.sys.id} project={project.fields} />
            );
          })}
        </CardGrid>
      </Section>

      <SkillsSection skillCategories={skillCategories} />
    </MainLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      skillCategories: await getContentTypeEntries("skillCategory"),
      projects: await getContentTypeEntries("project"),
      caseStudies: await getContentTypeEntries("caseStudy"),
    },
    revalidate: 3000,
  };
}
