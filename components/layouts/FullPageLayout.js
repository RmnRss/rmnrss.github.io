import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Header from "../navigation/Header";
import SEO from "../seo";

const FullPageContainer = styled.div`
  width: 100vw;
  max-width: 100%;

  height: 100vh;
  max-height: 100%;
`;

function FullPageLayout({ children, description, title }) {
  return (
    <>
      <SEO title={title} description={description} />
      <Header />
      <FullPageContainer>{children}</FullPageContainer>
    </>
  );
}

FullPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FullPageLayout;
