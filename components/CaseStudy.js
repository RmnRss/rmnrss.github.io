import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Breakpoints from "../utils/breakpoints";
import DetailsCard from "./cards/DetailsCard";
import Curtain from "./Curtain";

const Holder = styled.div`
  width: 100vw;
  max-width: 100%;

  height: 100vh;
  max-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.index % 2 === 0 && props.theme.darkLight};

  @media screen and (max-width: ${Breakpoints.md}px) {
    margin: 4.5rem 0 0 0;

    height: 100%;
  }
`;

const Container = styled.div`
  position: relative;

  width: 100%;

  max-width: 1280px;

  padding: 2rem;

  color: ${(props) => props.theme.dark};

  overflow: hidden;

  @media screen and (max-width: ${Breakpoints.md}px) {
    padding: 0;
  }
`;

const ImageHolder = styled.div`
  position: relative;

  width: 100%;
  max-width: 1024px !important;

  overflow: hidden;
`;

function CaseStudy({ caseStudy, index }) {
  return (
    <Holder index={index}>
      <Container>
        <ImageHolder>
          <Curtain />

          <Image
            src={`https://${caseStudy.cover.fields.file.url}?fm=webp&w=1280&h=720`}
            width={1280}
            height={720}
            layout={"responsive"}
          />
        </ImageHolder>

        <DetailsCard
          preview={caseStudy.preview}
          readTime={caseStudy.readTime}
          title={caseStudy.title}
          slug={caseStudy.slug}
        />
      </Container>
    </Holder>
  );
}

CaseStudy.propTypes = {
  caseStudy: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default CaseStudy;
