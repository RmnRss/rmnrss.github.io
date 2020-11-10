import PropTypes from "prop-types";
import React from "react";
import SEO from "../../components/seo";
import theme from "../../styles/main-theme";
import Body from "../Body";
import Footer from "../Footer";
import Header from "../navigation/Header";

function MainLayout({ children, caseStudies, featuredCases, title }) {
  return (
    <>
      <SEO title={title} />
      <Body theme={theme}>
        <Header caseStudies={caseStudies} featuredCases={featuredCases} />
        {children}
        <Footer backgroundColor={theme.light} />
      </Body>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  caseStudies: PropTypes.arrayOf(PropTypes.object).isRequired,
  featuredCases: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default MainLayout;
