import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import FlexboxColumn from "./FlexboxColumn";

const Holder = styled(FlexboxColumn)`
  position: fixed;
  z-index: 998;

  top: 3rem;

  padding: 1.5rem;

  width: 100%;

  background-color: ${(props) => props.theme.light};
  border-bottom: 1px solid ${(props) => props.theme.lightBlue};

  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  opacity: ${(props) => (props.open ? "1" : "0")};

  transition: visibility, opacity 0.2s ease-out;

  overflow: hidden;
`;

const Container = styled(FlexboxColumn)`
  width: 100%;
  max-width: 1280px;

  padding: 2rem;

  border-radius: 4px;

  color: ${(props) => props.theme.dark};
`;

const Content = styled.div`
  width: 100%;
`;

export default function DropdownMenu({ open, children, ...props }) {
  if (open) {
    return (
      <Holder
        open={open}
        justifyContent={"center"}
        alignItems={"center"}
        {...props}
      >
        <Container>
          <Content>{children}</Content>
        </Container>
      </Holder>
    );
  } else {
    return (
      <Holder
        open={open}
        justifyContent={"center"}
        alignItems={"center"}
        {...props}
      >
        <Container>
          <Content>{children}</Content>
        </Container>
      </Holder>
    );
  }
}

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
};
