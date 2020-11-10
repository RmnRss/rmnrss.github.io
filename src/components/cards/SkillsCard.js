import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import FlexboxRow from "../FlexboxRow";
import Card from "./Card";

const Container = styled(Card)`
  && {
    padding: 0;
  }
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.light};
`;

const TitleContainer = styled.div`
  width: 100%;

  padding: 0.5rem 1rem;

  color: ${(props) => props.theme.light};
  background-color: ${(props) => props.theme.dark};
`;

const Content = styled(FlexboxRow)`
  padding: 0.5rem 0;
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;

  color: ${(props) => props.theme.primary};
`;

function SkillsCard(props) {
  return (
    <Container>
      <TitleContainer>
        <b>{props.title}</b>
      </TitleContainer>
      <Content alignItems={"center"}>
        {props.children.map((child) => (
          <GridItem key={child.key}>{child}</GridItem>
        ))}
      </Content>
    </Container>
  );
}

SkillsCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default SkillsCard;
