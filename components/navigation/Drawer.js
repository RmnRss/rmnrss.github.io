import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Breakpoints from "../../utils/breakpoints";
import ExternalLink from "../ExternalLink";
import FlexboxColumn from "../FlexboxColumn";
import Icon from "../Icon";

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  max-width: 100%;

  height: 100vh;
  max-height: 100%;

  padding: 4rem 0;

  background-color: ${(props) => props.theme.light};
  color: ${(props) => props.theme.dark};

  @media screen and (max-width: ${Breakpoints.md}px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const DrawerContent = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 2fr 1fr;

  width: 100%;
  max-width: ${Breakpoints.md}px;

  padding: 2rem;

  color: ${(props) => props.theme.dark};

  @media screen and (max-width: ${Breakpoints.md}px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnTitle = styled.b`
  margin: 0 0 1rem 0;

  color: ${(props) => props.theme.primary};
`;

const PageLink = styled.a`
  position: relative;

  margin: 0 0 1.5rem 0;

  font-size: 2rem;

  pointer-events: all;
  cursor: pointer;

  transition: all 0.1s ease;

  &:after {
    background-color: ${(props) => props.theme.accentGreen};
    content: "";
    display: block;
    height: 2px;
    opacity: ${(props) => (props.active ? 1 : 0.35)};
    transform-origin: ${(props) => (props.active ? "0 0" : "100% 0")};
    transform: ${(props) => (props.active ? "scaleX(1)" : "scaleX(0)")};
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  &:hover:after {
    opacity: 1;
    transform-origin: 0 0;
    transform: scaleX(1);
  }

  @media screen and (max-width: ${Breakpoints.md}px) {
    font-size: 1.25rem;
    margin: 0 0 0.5rem 0;

    &:after {
      display: none;
    }
  }
`;

const ContactRow = styled(ExternalLink)`
  display: flex;
  align-items: center;

  margin: 0 0 1rem 0;
  width: 100%;

  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.accentGreen};
    fill: ${(props) => props.theme.accentGreen} !important;
    cursor: pointer;
  }
`;

const ContactLabel = styled.label`
  margin: 0 0 0 0.75rem;
`;

export default function Drawer({ open, toggleDrawer }) {
  if (open) {
    return (
      <Container alignItems={"center"} justifyContent={"center"}>
        <DrawerContent>
          <FlexboxColumn>
            <ColumnTitle>Navigation</ColumnTitle>

            <Link href={"/"}>
              <PageLink onClick={() => toggleDrawer()}>Home</PageLink>
            </Link>

            <Link href={"/#work"}>
              <PageLink>My Work</PageLink>
            </Link>

            <Link href={"/about-me"}>
              <PageLink onClick={() => toggleDrawer()}>About Me</PageLink>
            </Link>
          </FlexboxColumn>

          <FlexboxColumn>
            <ColumnTitle>Contact</ColumnTitle>

            <ContactRow href={"https://www.linkedin.com/in/rmnrss/"}>
              <Icon name={"socials/linkedin"} size={24} color={"dark"} />
              <ContactLabel>linkedin</ContactLabel>
            </ContactRow>

            <ContactRow href={"mailto: romain.rousseau5@gmail.com"}>
              <Icon name={"socials/email"} size={24} color={"dark"} />
              <ContactLabel>romain.rousseau5@gmail.com</ContactLabel>
            </ContactRow>

            <ContactRow href={"https://github.com/rmnrss"}>
              <Icon name={"skills/github"} size={24} color={"dark"} />
              <ContactLabel>github</ContactLabel>
            </ContactRow>
          </FlexboxColumn>
        </DrawerContent>
      </Container>
    );
  } else {
    return null;
  }
}

Drawer.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func.isRequired,
};

Drawer.defaultProps = {
  open: false,
};
