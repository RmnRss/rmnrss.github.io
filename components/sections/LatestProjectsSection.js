import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Breakpoints from "../../utils/breakpoints";
import ProjectCard from "../cards/ProjectCard";

const NewsSection = styled.section`
  position: relative;
  z-index: 1;

  margin-top: calc(${(props) => props.height}px / -2);
  margin-bottom: calc(${(props) => props.height}px / -2);

  @media screen and (max-width: ${Breakpoints.md}px) {
    margin: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin: auto;
  padding: 0 2rem;

  width: 100%;
  max-width: 1280px;

  @media screen and (max-width: ${Breakpoints.md}px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
  }
`;

export default function LatestProjectsSection({ featuredProjects }) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = document.getElementById("latest-projects");

    setHeight(el.offsetHeight);
  }, [height]);

  return (
    <NewsSection id={"latest-projects"} height={height}>
      <Grid>
        {featuredProjects.map((project) => {
          return <ProjectCard key={project.sys.id} project={project.fields} />;
        })}
      </Grid>
    </NewsSection>
  );
}

LatestProjectsSection.propTypes = {
  featuredProjects: PropTypes.arrayOf(PropTypes.object),
};
