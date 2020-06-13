import BackgroundImage from "gatsby-background-image";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import AnimatedComponentInView from "../AnimatedComponentInView";
import Button from "../Button";
import FlexboxColumn from "../FlexboxColumn";
import Separator from "../Separator";
import Card from "./Card";

const BgImg = styled(BackgroundImage)`
  && {
    position: absolute !important;
    top: 0;
    left: 0;
  }

  background-position: top;
  width: 100%;
  height: 100%;

  transition: all 0.8s ease-out;
`;

const CardContent = styled(FlexboxColumn)`
  padding: 2rem;
  height: 100%;

  color: ${props => props.theme.light};

  transform: translateY(85%);

  transition: all 0.8s cubic-bezier(0.44, 0.01, 0, 1);
`;

const CardContainer = styled(Card)`
  padding: 0;
  max-width: 680px;
  height: 24rem;

  opacity: 0;
  transform: translateX(12vh);
  visibility: hidden;
  transition: opacity 0.5s ease-out, transform 0.6s ease-out;

  &.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }

  &:hover ${CardContent} {
    transform: translateY(0%);
  }

  &:hover ${BgImg} {
    filter: brightness(0.2);
    transform: scale(1.15);
  }
`;

const CardButton = styled(Button)`
  margin-top: auto;
  width: 100%;
`;

const CardDescription = styled.p`
  color: inherit;
`;

const CardTitle = styled.h4`
  letter-spacing: 0.025em;
  color: inherit;
  margin: 0.5rem 0;
`;

function ProjectCard(props) {
  return (
    <AnimatedComponentInView>
      <CardContainer {...props}>
        <BgImg fluid={props.fluid} />
        <CardContent>
          <Separator color={props.color} margin={"0 0 1rem 0"} width={"4rem"} />
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
          <CardButton
            to={props.link}
            color={"secondary"}
            hoverColor={"primary"}
            label={"Learn More"}
          />
        </CardContent>
      </CardContainer>
    </AnimatedComponentInView>
  );
}

ProjectCard.propTypes = {
  color: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fluid: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectCard;
