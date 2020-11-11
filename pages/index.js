import styled from "styled-components";
import CaseStudyCard from "../components/cards/CaseStudyCard";
import HobbyCard from "../components/cards/HobbyCard";
import ProjectCard from "../components/cards/ProjectCard";
import FlexboxRow from "../components/FlexboxRow";
import MainLayout from "../components/layouts/MainLayout";
import MarkdownRenderer from "../components/MarkdownRenderer";
import HeadSection from "../components/sections/HeadSection";
import LatestProjectsSection from "../components/sections/LatestProjectsSection";
import Section from "../components/sections/Section";
import SkillsSection from "../components/sections/SkillsSection";
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

function IndexPage({ caseStudies, hobbies, owner, projects, skillCategories }) {
  return (
    <MainLayout
      title=""
      description=""
      caseStudies={caseStudies}
      featuredCases={caseStudies.slice(0, 2)}
    >
      <HeadSection me={owner} />

      <LatestProjectsSection featuredProjects={projects.slice(0, 3)} />

      <Section id={"about-me"} backgroundColor={"lightBlue"}>
        <Title color={"dark"}>About Me</Title>

        <FlexboxRow justifyContent={"center"} alignItems={"center"}>
          <MarkdownRenderer document={owner.bio.content[0]} />
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

      <SkillsSection skillCategories={skillCategories} />

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
    </MainLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      skillCategories: await getContentTypeEntries("skillCategory"),
      hobbies: await getContentTypeEntries("hobby"),
      projects: await getContentTypeEntries("project"),
      caseStudies: await getContentTypeEntries("caseStudy"),
      owner: await getSingleEntry("3s36kiP3mua8eAXRnWorT6"),
    },
    revalidate: 3000,
  };
}

export default IndexPage;
