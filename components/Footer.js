import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import FlexboxColumn from "./FlexboxColumn";
import FlexboxRow from "./FlexboxRow";
import SocialIcons from "./SocialIcons";

const FooterContainer = styled.footer`
  position: relative;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.light};
  border-top: 1px solid #bcbcbc;
`;

const FooterContent = styled(FlexboxRow)`
  flex-wrap: wrap;
  width:100%
  max-width: 1280px;
`;

const FooterName = styled.p`
  flex-wrap: wrap;
  color: ${(props) => props.theme.black};
`;

const Infos = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.black};
`;

function Footer({ className }) {
  return (
    <FooterContainer className={className}>
      <FooterContent alignItems={"center"} justifyContent={"space-between"}>
        <FlexboxColumn alignItems={"flex-start"}>
          <FooterName>Romain Rousseau</FooterName>
          <Infos>
            Site powered by <b>Github</b>, <b>Gatsby</b> {"&"} <b>Contentful</b>
          </Infos>
        </FlexboxColumn>

        <SocialIcons iconSize={24} />
      </FooterContent>
    </FooterContainer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
