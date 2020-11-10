import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const CardGrid = styled.div`
  display: grid;

  grid-gap: 2rem;
  grid-template-columns: 1fr;

  padding: 2rem 0;
`;

const CenteredItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function PortfolioSection(props) {
  return (
    <>
      <h1>Case studies</h1>
      <CardGrid>
        {props.children.map(child => {
          return <CenteredItem key={child.key}>{child}</CenteredItem>;
        })}
      </CardGrid>
    </>
  );
}

PortfolioSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PortfolioSection;
