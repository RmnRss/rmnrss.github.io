import PropTypes from "prop-types";
import React from "react";
import SEO from "../../components/seo";
import theme from "../../styles/theme";
import Footer from "../Footer";
import Header from "../navigation/Header";

function MainLayout({ children, description, title }) {
  return (
    <>
      <SEO title={title} description={description} />
      <Header />
      {children}
      <Footer backgroundColor={theme.light} />
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainLayout;
