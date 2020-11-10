import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Breakpoints from "../../utils/breakpoints";
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

    transition: all 0.2s ease-out;

    &:hover {
      z-index: 1;
      color: ${(props) => props.theme.light};
      background-color: ${(props) => props.theme.primary};
      transform: scale(1.1);
    }

    &:hover ${LabelRow} {
      color: ${(props) => props.theme.light};
    }

    &:hover ${LaunchIcon} {
      fill: ${(props) => props.theme.light};
    }

    @media screen and (max-width: ${Breakpoints.md}px) {
      &:hover {
        transform: scale(1);
      }
    }
  }
`;

function ProjectCard({ link, category, title, ...props }) {
  return (
    <ExternalLink href={link}>
      <CardContainer {...props}>
        <Category>{category.title}</Category>
        <CardTitle>{title}</CardTitle>

        <LabelRow alignItems="center">
          <CardLabel>Learn more</CardLabel>
          <LaunchIcon name={"launch"} color={"primary"} size={16} />
        </LabelRow>
      </CardContainer>
    </ExternalLink>
  );
}

ProjectCard.propTypes = {
  category: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectCard;