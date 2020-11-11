import Link from "next/link";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import Breakpoints from "../../utils/breakpoints";
import FlexboxColumn from "../FlexboxColumn";
import Icon from "../Icon";

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 3;

  width: 100vw;
  max-width: 100%;

  height: 100vh;
  max-height: 100%;

  padding: 4rem 0;

  background-color: ${(props) => props.theme.light};
  color: ${(props) => props.theme.black};

  @media screen and (min-width: ${Breakpoints.md}px) {
    display: none;
  }
`;

const DrawerLinks = styled(FlexboxColumn)`
  align-items: stretch;
  justify-content: stretch;

  width: 100%;
`;

const DrawerItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem 2rem;

  font-weight: 600;

  p {
    font-weight: 500;
  }

  &:hover {
    background-color: ${(props) => props.theme.lightBlue};
    cursor: pointer;
  }
`;

const ExpandIcon = styled(Icon)`
  transition: transform 0.3s ease;

  transform: rotate(${(props) => (props.expanded ? "180deg" : "0deg")});
`;

export default function Drawer({ open, toggleDrawer, caseStudies }) {
  const [showCases, setShowCases] = useState(false);

  const toggleCases = () => {
    setShowCases(!showCases);
  };

  if (open) {
    return (
      <Container>
        <DrawerLinks>
          <Link href={"/"} onClick={() => toggleDrawer()}>
            <DrawerItem>Home</DrawerItem>
          </Link>

          <Link href={"/#about-me"} onClick={() => toggleDrawer()}>
            <DrawerItem>About Me</DrawerItem>
          </Link>

          <DrawerItem onClick={() => toggleCases()}>
            Case Studies
            <ExpandIcon
              expanded={showCases}
              name={"expand"}
              size={24}
              color={"black"}
            />
          </DrawerItem>
          {showCases && (
            <>
              {caseStudies.map((caseStudy) => {
                return (
                  <Link
                    href={`/case-studies/[slug]}`}
                    as={`/case-studies/${caseStudy.fields.slug}`}
                    onClick={() => toggleDrawer()}
                    key={caseStudy.sys.id}
                  >
                    <DrawerItem>
                      <p>{caseStudy.fields.title}</p>
                    </DrawerItem>
                  </Link>
                );
              })}
            </>
          )}
        </DrawerLinks>
      </Container>
    );
  } else {
    return null;
  }
}

Drawer.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func.isRequired,
  caseStudies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Drawer.defaultProps = {
  open: false,
};
