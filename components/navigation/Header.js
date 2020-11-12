import Link from "next/link";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../Icon";
import Drawer from "./Drawer";

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
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1920px;

  padding: 0 2rem;

  color: ${(props) => props.theme.black};
`;

const Brand = styled.a`
  color: ${(props) => props.theme.primary} !important;
`;

const IconHolder = styled.div`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.light} !important;

  border-radius: 50%;
`;

function Header({ caseStudies, className }) {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <>
      <Container className={className}>
        <Nav>
          <Link passHref href={"/"}>
            <Brand target="_self" onClick={() => closeDrawer()}>
              rmnrss.io
            </Brand>
          </Link>

          <IconHolder>
            <Icon
              name={showDrawer ? "close" : "menu"}
              size={24}
              color={"dark"}
              onClick={() => toggleDrawer()}
            />
          </IconHolder>
        </Nav>
      </Container>

      <Drawer
        open={showDrawer}
        toggleDrawer={closeDrawer}
        caseStudies={caseStudies}
      />
    </>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  caseStudies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
