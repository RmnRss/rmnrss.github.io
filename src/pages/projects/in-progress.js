import React from "react";
import styled from "styled-components";
import Body from "../../components/Body";
import Button from "../../components/Button";
import FlexboxColumn from "../../components/FlexboxColumn";
import Footer from "../../components/Footer";
import Section from "../../components/sections/Section";
import SEO from "../../components/seo";
import theme from "../../styles/main-theme";

const ContentCenter = styled(FlexboxColumn)`
  margin: auto;
  z-index: 0;
`;

const FixedFooter = styled(Footer)`
  position: fixed;
  bottom: 0%;
  width: 100%;
`;

const InProgress = () => {
  return (
    <>
      <SEO title="Coming soon." />

      <Body theme={theme}>
        <Section backgroundColor={theme.light}>
          <ContentCenter alignItems={"center"}>
            <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>
              This case study is currently in development.
            </h3>

            <Button
              to={"/"}
              label={"Main page"}
              color={"dark"}
              hoverColor={"primary"}
            />
          </ContentCenter>
        </Section>
        <FixedFooter backgroundColor={theme.light} />
      </Body>
    </>
  );
};

export default InProgress;
