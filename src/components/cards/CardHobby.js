import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import AnimatedComponentInView from "../AnimatedComponentInView";
import FlexboxColumn from "../FlexboxColumn";
import FlexboxRow from "../FlexboxRow";

const Container = styled(FlexboxRow)`
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

const IconContainer = styled(FlexboxColumn)`
  padding: 1rem;
  margin-right: -2.5rem;
  z-index: 1;
  background-color: ${props => props.theme.purpleDark};
`;

const Icon = styled.i`
  text-align: center;
  font-size: 3em !important;
  color: ${props => props.theme.light};
`;

const TextContainer = styled.div`
  padding: 1rem 1rem 1rem 3rem;
  margin: 1rem 0;
  background-color: ${props => props.theme.light};
`;

const Description = styled.p`
  font-size: 0.85em;
`;

function CardHobby(props) {
  return (
    <AnimatedComponentInView>
      <Container justifyContent={"center"} alignItems={"center"}>
        <IconContainer justifyContent={"center"} alignItems={"center"}>
          {props.iconLibrary === "material" && (
            <Icon className={"material-icons"}>{props.iconName}</Icon>
          )}

          {props.iconLibrary === "fontawesome" && (
            <Icon className={props.iconName} />
          )}
        </IconContainer>
        <TextContainer justifyContent={"flex-start"} alignItems={"flex-start"}>
          <b>{props.title}</b>
          <Description>{props.description}</Description>
        </TextContainer>
      </Container>
    </AnimatedComponentInView>
  );
}

CardHobby.propTypes = {
  description: PropTypes.string.isRequired,
  iconLibrary: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardHobby;
