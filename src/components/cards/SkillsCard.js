import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import AnimatedComponentInView from "../AnimatedComponentInView";
import Card from "./Card";

const Container = styled(Card)`
  background-color: ${props => props.theme.light};

  &:after {
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;

    display: block;
    width: 4px;
    height: 192px;
    background-color: ${props => props.theme.purpleDark};
  }

  opacity: 0;
  transform: translateX(12vh);
  visibility: hidden;
  transition: opacity 0.5s ease-out, transform 0.6s ease-out;

  &.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);

  text-align: center;
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SkillsCard(props) {
  return (
    <AnimatedComponentInView>
      <Container>
        <b>{props.title}</b>
        <Grid>
          {props.children.map(child => (
            <GridItem>{child}</GridItem>
          ))}
        </Grid>
      </Container>
    </AnimatedComponentInView>
  );
}

SkillsCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default SkillsCard;
