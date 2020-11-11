import PropTypes from "prop-types";
import React from "react";
import SEO from "../../components/seo";
import theme from "../../styles/theme";
import Footer from "../Footer";
import Header from "../navigation/Header";

function MainLayout({
  caseStudies,
  children,
  description,
  featuredCases,
  title,
}) {
  return (
    <>
      <SEO title={title} description={description} />
      <Header caseStudies={caseStudies} featuredCases={featuredCases} />
      {children}
      <Footer backgroundColor={theme.light} />
    </>
  );
}

MainLayout.propTypes = {
  caseStudies: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  featuredCases: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default MainLayout;
