import styled from "styled-components";
import ProjectCard from "../components/cards/ProjectCard";
import CaseStudy from "../components/CaseStudy";
import MainLayout from "../components/layouts/MainLayout";
import HeadSection from "../components/sections/HeadSection";
import Section from "../components/sections/Section";
import SkillsSection from "../components/sections/SkillsSection";
import { getContentTypeEntries, getSingleEntry } from "../services/contentful";
import Breakpoints from "../utils/breakpoints";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, 1fr);
  grid-gap: 1.5rem;

  margin: 4rem 0;

  @media screen and (max-width: ${Breakpoints.xlg}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${Breakpoints.md}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function IndexPage({ caseStudies, owner, projects, skillCategories }) {
  return (
    <MainLayout title="" description="">
      <HeadSection me={owner} />

      <section id={"work"}>
        {caseStudies.map((caseStudy, i) => {
          return (
            <CaseStudy
              caseStudy={caseStudy.fields}
              key={caseStudy.sys.id}
              index={i}
            />
          );
        })}
      </section>

      <Section id={"other-projects"}>
        <h2 className={"centered-text"}>More of my work</h2>
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
      caseStudies: await getContentTypeEntries("caseStudy"),
      owner: await getSingleEntry("3s36kiP3mua8eAXRnWorT6"),
      projects: await getContentTypeEntries("project"),
      skillCategories: await getContentTypeEntries("skillCategory"),
    },
    revalidate: 3000,
  };
}

export default IndexPage;
