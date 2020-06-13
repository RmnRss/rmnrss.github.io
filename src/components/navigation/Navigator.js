import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import NavigatorItem from "./NavigatorItem";

const NavContainer = styled.nav`
  position: fixed;

  width: ${props => (props.horizontal ? "calc(50% - 4rem)" : "")};
  height: ${props => (props.horizontal ? "" : "calc(100% - 8rem)")};

  padding: ${props => (props.horizontal ? "0 2rem" : "4rem 0")};

  bottom: ${props => (props.horizontal ? "0%" : "")};
  left: ${props =>
    props.horizontal ? "" : "calc(((100% - 1440px) / 2) - 4rem)"};

  display: flex;
  flex-direction: ${props => (props.horizontal ? "row" : "column")};
  justify-content: ${props => (props.horizontal ? "flex-start" : "flex-start")};
  align-items: center;

  z-index: 999;
`;

const Label = styled.h3`
  font-weight: 800;
  text-transform: ${props => (props.horizontal ? "capitalize" : "uppercase")};

  margin: ${props => (props.horizontal ? "0 0 0 1rem" : "0 0 1rem 0")};

  writing-mode: ${props => (props.horizontal ? "" : "vertical-lr")};

  letter-spacing: 0.05em;
  color: ${props => props.theme.primary};

  transform: ${props => (props.horizontal ? "" : "rotate(180deg)")};

  opacity: 0;
  transition: opacity 0.3s ease-out;

  &.is-visible {
    opacity: 1;
  }
`;

const NextButton = styled(Button)`
  && {
    margin-left: auto;
  }
`;

function scrollToNext(current, allPos) {
  let next;

  for (let pos of allPos) {
    if (pos > current) {
      next = pos;
      window.scrollTo(next, 0);
      break;
    }
  }
}

function Navigator(props) {
  const sections = React.Children.toArray(props.children);
  let allPos = [];

  for (let section of sections) {
    let offset = document.getElementById(section.props.id).offsetLeft;
    allPos.push(offset);
  }

  return (
    <>
      <NavContainer horizontal={props.horizontal} className={props.className}>
        {!props.horizontal && (
          <Label id="navigator-label" horizontal={props.horizontal} />
        )}

        {sections.map(section => (
          <NavigatorItem
            key={section.key}
            horizontal={props.horizontal}
            sectionID={section.props.id}
            label={section.props.className}
          />
        ))}

        {props.horizontal && (
          <>
            <Label id="navigator-label" horizontal={props.horizontal} />

            <NextButton
              label={"Next"}
              color={"dark"}
              hoverColor={"light"}
              onClick={() => scrollToNext(window.scrollX, allPos)}
            />
          </>
        )}
      </NavContainer>
      {props.children}
    </>
  );
}

Navigator.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  horizontal: PropTypes.bool,
};

Navigator.defaultProps = {};

export default Navigator;
