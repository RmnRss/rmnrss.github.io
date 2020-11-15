import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import ExternalLink from "../ExternalLink";
import FlexboxRow from "../FlexboxRow";
import Icon from "../Icon";
import Card from "./Card";

const CardTitle = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  margin: 0.5rem 0;

  overflow: hidden;

  font-size: 20px;
  line-height: 1.5;
  height: 60px;
  text-overflow: ellipsis;
  word-break: break-word;
`;

const Category = styled.div`
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: ${(props) => props.theme.darkLight};
`;

const LabelRow = styled(FlexboxRow)`
  margin-top: auto;
  color: ${(props) => props.theme.primary};
`;

const CardLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

const LaunchIcon = styled(Icon)`
  margin-left: 0.5rem;

  font-size: 18px;
`;

const CardContainer = styled(Card)`
  && {
    padding: 2rem;

    color: ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.light};

    &:hover,
    &:hover ${LabelRow} {
      color: ${(props) => props.theme.light};
    }

    &:hover ${LaunchIcon} {
      fill: ${(props) => props.theme.light};
    }
  }
`;

function ProjectCard({ project }) {
  const category = project.category.fields;

  return (
    <ExternalLink href={project.url}>
      <CardContainer className="swoop-in">
        <Category>{category.title}</Category>
        <CardTitle>{project.title}</CardTitle>

        <LabelRow alignItems="center">
          <CardLabel>Learn more</CardLabel>
          <LaunchIcon name={"launch"} color={"primary"} size={16} />
        </LabelRow>
      </CardContainer>
    </ExternalLink>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
