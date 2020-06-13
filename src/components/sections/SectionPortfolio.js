import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import FlexboxColumn from "../FlexboxColumn";
import Separator from "../Separator";
import SectionTitle from "./SectionTitle";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  margin: auto 0;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
`;

function SectionPortfolio(props) {
  return (
    <Grid>
      <FlexboxColumn alignItems={"stretch"} justifyContent={"center"}>
        <SectionTitle color={"#FFD875"}>Educational</SectionTitle>
        <SectionTitle color={"#FEBE81"}>& Personal</SectionTitle>
        <SectionTitle color={"#EFA45D"}>Projects</SectionTitle>
        <Separator color={"#22CAAC"} margin={"2rem 0 1rem 0"} width={"3rem"} />
      </FlexboxColumn>
      <CardGrid>{props.children}</CardGrid>
    </Grid>
  );
}

SectionPortfolio.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionPortfolio;
