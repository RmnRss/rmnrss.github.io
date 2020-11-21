import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import breakpoints from "../../utils/breakpoints";
import FlexboxColumn from "../FlexboxColumn";
import FlexboxRow from "../FlexboxRow";
import Icon from "../Icon";
import Card from "./Card";

const Container = styled(Card)`
  padding: 1.5rem;

  color: ${(props) => props.theme.dark};

  @media screen and (max-width: ${breakpoints.sm}px) {
    padding: 1rem;
  }
`;

const CardContent = styled(FlexboxRow)`
  @media screen and (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
  }
`;

const IconContainer = styled(FlexboxColumn)`
  z-index: 1;

  padding: 0.5rem;
  margin: 0 2rem 0 0;

  background-color: ${(props) => props.theme[props.color]};
  border-radius: 12px;

  @media screen and (max-width: ${breakpoints.sm}px) {
    margin: 0 2rem 2rem 0;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
`;

const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 14px;
`;

function HobbyCard({ color, hobby }) {
  return (
    <Container backgroundColor={"light"}>
      <CardContent alignItems="flex-start" justifyContent="flex-start">
        <IconContainer
          justifyContent={"center"}
          alignItems={"center"}
          color={color}
        >
          <Icon name={`hobbies/${hobby.iconName}`} size={48} color={"light"} />
        </IconContainer>
        <FlexboxColumn justifyContent={"flex-start"} alignItems={"flex-start"}>
          <Title>{hobby.name}</Title>
          <Description>{hobby.description}</Description>
        </FlexboxColumn>
      </CardContent>
    </Container>
  );
}

HobbyCard.propTypes = {
  color: PropTypes.string.isRequired,
  hobby: PropTypes.object.isRequired,
};

export default HobbyCard;
