import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import Breakpoints from "../../utils/breakpoints";
import CaseStudyPreview from "../cards/CaseStudyPreview";
import DropdownMenu from "../DropdownMenu";
import FlexboxColumn from "../FlexboxColumn";
import FlexboxRow from "../FlexboxRow";
import Icon from "../Icon";
import SocialIcons from "../SocialIcons";
import Drawer from "./Drawer";
import HeaderItem from "./HeaderItem";

const Container = styled.header`
  position: fixed;
  top: 0%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 1rem 0;

  width: 100%;

  z-index: 999;

  background-color: ${(props) => props.theme.light};

  border-bottom: 1px solid ${(props) => props.theme.lightBlue};
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1280px;

  padding: 0 2rem;

  color: ${(props) => props.theme.black};
`;

const NavLinks = styled(FlexboxRow)`
  @media screen and (max-width: ${Breakpoints.md}px) {
    display: none;
  }
`;

const MenuLabel = styled.b`
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;

  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const Sep = styled.div`
  height: 100%;
  width: 1px;

  margin: 0 1rem;

  background-color: ${(props) => props.theme.grey};
`;

const CaseStudyList = styled(FlexboxColumn)`
  margin: 1rem 3rem 1rem 0;

  p {
    margin-bottom: 0.5rem;
  }
`;

const ProjectPreviews = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  width: 100%;
`;

const Brand = styled(HeaderItem)`
  && {
    color: ${(props) => props.theme.primary};
  }
`;

const CaseStudyLink = styled(HeaderItem)`
  && {
    font-weight: 500;

    &:after {
      display: none;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

const MenuIcon = styled(Icon)`
  display: none;
  cursor: pointer;

  @media screen and (max-width: ${Breakpoints.md}px) {
    display: flex;
  }
`;

function Header({ caseStudies, featuredCases, className }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <Container className={className}>
        <Nav>
          <MenuIcon
            name={showDrawer ? "close" : "menu"}
            size={24}
            color={"dark"}
            onClick={() => toggleDrawer()}
          />
          <NavLinks alignItems={"center"}>
            <Brand path={"/"} label={"rmnrss.io"} />
            <HeaderItem path={"/"} label={"Home"} />
            <HeaderItem path={"/#about-me"} label={"About Me"} />
            <HeaderItem
              path={"/#case-studies"}
              label={"Case Studies"}
              onMouseEnter={() => setOpenMenu(true)}
            />
          </NavLinks>
          <SocialIcons iconSize={24} />
        </Nav>
      </Container>

      <Drawer
        open={showDrawer}
        toggleDrawer={toggleDrawer}
        caseStudies={caseStudies}
      />

      <DropdownMenu onMouseLeave={() => setOpenMenu(false)} open={openMenu}>
        <MenuLabel>Case Studies</MenuLabel>
        <FlexboxRow alignItems={"flex-start"} justifyContent={"flex-start"}>
          <CaseStudyList>
            {caseStudies.map((el) => {
              let obj = el.node;
              return (
                <CaseStudyLink
                  key={obj.id}
                  label={obj.title}
                  path={`/case-studies/${obj.slug}`}
                />
              );
            })}
          </CaseStudyList>
          <Sep />
          <ProjectPreviews>
            {featuredCases.map((aCase) => {
              let obj = aCase.node;
              return (
                <CaseStudyPreview
                  key={obj.id}
                  title={obj.title}
                  fluid={obj.cover.fluid}
                  slug={obj.slug}
                />
              );
            })}
          </ProjectPreviews>
        </FlexboxRow>
      </DropdownMenu>
    </>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  caseStudies: PropTypes.arrayOf(PropTypes.object).isRequired,
  featuredCases: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
