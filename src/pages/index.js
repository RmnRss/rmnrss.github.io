import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { ReactComponent as FlatMeSVG } from "../assets/svg/me-space.svg";
import Button from "../components/Button";
import CardProject from "../components/cards/CardProject";
import LayoutVertical from "../components/layouts/LayoutVertical";
import Section from "../components/sections/Section";
import SectionAboutMe from "../components/sections/SectionAboutMe";
import SectionHead from "../components/sections/SectionHead";
import SectionPortfolio from "../components/sections/SectionPortfolio";
import SEO from "../components/seo";
import SocialIcons from "../components/SocialIcons";
import theme from "../styles/main-theme";

const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.lightDark};
`;

const SVGContainer = styled(FlatMeSVG)`
  @media screen and (max-width: 1024px) {
    width: 75%;
    height: 240px;
  }

  @media screen and (max-width: 840px) {
    width: 75%;
    height: 180px;
  }
`;

const scrollToRef = ref => {
  window.scrollTo(0, ref.current.offsetTop);
};

function IndexPage({ data }) {
  const aboutMeRef = React.useRef();

  return (
    <>
      <SEO title={`Portfolio`} />
      <LayoutVertical>
        <div className={"Welcome"} id="head-section">
          <SectionHead>
            <SVGContainer />

            <Title>
              “ A front-end developer with the <br /> heart of a designer ”
            </Title>

            <Button
              color={"dark"}
              hoverColor={"secondary"}
              label={"Learn More"}
              onClick={() => scrollToRef(aboutMeRef)}
            />

            <SocialIcons iconSize={32} color={theme.lightDark} />
          </SectionHead>
        </div>

        <div className={"About Me"} id="about-me-section" ref={aboutMeRef}>
          <SectionAboutMe
            me={data.me}
            hobbies={data.hobbies.edges}
            skillsCategory={data.skillsCategory.edges}
          />
        </div>

        <div className={"Portfolio"} id="portfolio-section">
          <Section backgroundColor={theme.lightDark}>
            <SectionPortfolio>
              {data.projects.edges.map(obj => {
                let project = obj.node;
                return (
                  <CardProject
                    key={project.id}
                    title={project.name}
                    description={project.description.description}
                    fluid={project.cover.fluid}
                    color={project.color}
                    link={project.url}
                  />
                );
              })}
            </SectionPortfolio>
          </Section>
        </div>
      </LayoutVertical>
    </>
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
    projects: allContentfulProject {
      edges {
        node {
          id
          name
          color
          url
          description {
            description
          }
          cover {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
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
          skills {
            id
            name
            url
            iconName
          }
        }
      }
    }
    me: contentfulOwner {
      firstName
      lastName
      childContentfulOwnerDescriptionRichTextNode {
        json
      }
    }
  }
`;

export default IndexPage;
