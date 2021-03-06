import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import ContentLayout from "../layouts/ContentLayout";

const SectionContainer = styled.section`
  position: relative;
  display: flex;

  padding: 4rem 0;
  background-color: ${(props) => props.theme[props.backgroundColor]};
`;

function Section({
  animatedBackground,
  backgroundColor,
  children,
  className,
  ...props
}) {
  return (
    <SectionContainer
      {...props}
      backgroundColor={backgroundColor}
      className={className}
    >
      {animatedBackground && animatedBackground}
      <ContentLayout>{children}</ContentLayout>
    </SectionContainer>
  );
}

Section.propTypes = {
  /* The background color of the section*/
  backgroundColor: PropTypes.string,
  /* The background of the section*/
  animatedBackground: PropTypes.node,
};

Section.defaultProps = {
  backgroundColor: "transparent",
  animatedBackground: null,
};

export default Section;
