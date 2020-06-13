import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import FlexboxColumn from "../FlexboxColumn";

const Content = styled(FlexboxColumn)`
  position: relative;
  flex-grow: 1;

  margin: 0 auto;
  max-width: 1440px;
  padding: 4rem 2rem;

  z-index: 2;
`;

function LayoutContent(props) {
  return (
    <Content
      className={props.className}
      alignItems={"stretch"}
      justifyContent={"flex-start"}
    >
      {props.children}
    </Content>
  );
}

LayoutContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default LayoutContent;
