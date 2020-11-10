import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import CaseStudyCard from "../components/cards/CaseStudyCard";
import HobbyCard from "../components/cards/HobbyCard";
import ProjectCard from "../components/cards/ProjectCard";
import FlexboxRow from "../components/FlexboxRow";
import LatestProjectsSection from "../components/LatestProjectsSection";
import MainLayout from "../components/layouts/MainLayout";
import MarkdownRenderer from "../components/MarkdownRenderer";
import HeadSection from "../components/sections/HeadSection";
import Section from "../components/sections/Section";
import SkillsSection from "../components/sections/SkillsSection";
import { default as MainTheme, default as theme } from "../styles/main-theme";
import Breakpoints from "../utils/breakpoints";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, 1fr);
  grid-gap: 1.5rem;

  margin: 2rem 0;

  @media screen and (max-width: ${Breakpoints.md}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theme[props.color]};
`;

function IndexPage({ data }) {
  return (
    <MainLayout
      title=""
      caseStudies={data.caseStudies.edges}
      featuredCases={data.caseStudies.edges.slice(0, 2)}
    >
      <HeadSection me={data.me} />

      <LatestProjectsSection
        featuredProjects={data.projects.edges.slice(0, 3)}
      />

      <Section id={"about-me"} backgroundColor={"lightBlue"}>
        <Title color={"dark"}>About Me</Title>

        <FlexboxRow justifyContent={"center"} alignItems={"center"}>
          <MarkdownRenderer document={data.me.bio} />
        </FlexboxRow>
      </Section>
      <Section id={"hobbies"} backgroundColor={"light"}>
        <Title color={"dark"}>Some of my hobbies</Title>

        <CardGrid col={2}>
          {data.hobbies.edges.map((obj, index) => {
            let hobby = obj.node;
            return (
              <HobbyCard
                key={hobby.id}
                color={MainTheme.allAccents[index]}
                title={hobby.name}
                iconLibrary={hobby.iconLibrary}
                iconName={hobby.iconName}
                description={hobby.description.description}
              />
            );
          })}
        </CardGrid>
      </Section>

      <SkillsSection skillsCategories={data.skillsCategory.edges} />

      <Section id={"case-studies"} backgroundColor={theme.lightDark}>
        <Title color={"light"}>Case Studies</Title>

        <CardGrid col={3}>
          {data.caseStudies.edges.map((obj) => {
            let caseStudy = obj.node;
            return (
              <CaseStudyCard
                key={caseStudy.id}
                slug={caseStudy.slug}
                title={caseStudy.title}
                preview={caseStudy.preview.preview}
                fluid={caseStudy.cover.fluid}
                readTime={caseStudy.readTime}
              />
            );
          })}
        </CardGrid>

        <Title color={"light"}>Other Stuff</Title>

        <CardGrid col={3}>
          {data.projects.edges.map((edge) => {
            let project = edge.node;
            return (
              <ProjectCard
                key={project.id}
                link={project.url}
                category={project.category}
                title={project.title}
              />
            );
          })}
        </CardGrid>
      </Section>
    </MainLayout>
  );
}

export const data = graphql`
  query {
    svg: file(relativePath: { eq: "assets/svg/me-space.svg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    caseStudies: allContentfulCaseStudy {
      edges {
        node {
          id
          title
          slug
          publicationDate
          readTime
          category {
            title
          }
          cover {
            fluid(maxHeight: 512, resizingBehavior: FILL, toFormat: WEBP) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          preview {
            preview
          }
        }
      }
    }
    projects: allContentfulProject {
      edges {
        node {
          id
          title
          url
          category {
            title
          }
        }
      }
    }
    hobbies: allContentfulHobby {
      edges {
        node {
          id
          name
          iconName
          iconLibrary
          description {
            description
          }
        }
      }
    }
    skillsCategory: allContentfulSkillCategory {
      edges {
        node {
          id
          name
          color
          skills {
            id
            name
            url
            iconName
            skill_category {
              name
              color
            }
          }
        }
      }
    }
    me: contentfulOwner {
      firstName
      lastName
      bio {
        json
      }
    }
  }
`;

export default IndexPage;
