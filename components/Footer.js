import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import FlexboxColumn from "./FlexboxColumn";
import SocialIcons from "./SocialIcons";

const FooterContainer = styled.footer`
  position: relative;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.dark};
`;

const FooterContent = styled(FlexboxColumn)`
  flex-wrap: wrap;
  width:100%
  max-width: 1280px;
`;

const FooterName = styled.p`
  margin: 0 0 1rem 0;

  color: ${(props) => props.theme.black};
`;

function Footer({ className }) {
  return (
    <FooterContainer className={className}>
      <FooterContent alignItems={"center"} justifyContent={"center"}>
        <FooterName>Romain Rousseau</FooterName>
        <SocialIcons color={"lightBlue"} iconSize={24} />
      </FooterContent>
    </FooterContainer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
