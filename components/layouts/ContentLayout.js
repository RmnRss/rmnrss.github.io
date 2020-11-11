import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import FlexboxColumn from "../FlexboxColumn";

const Content = styled(FlexboxColumn)`
  position: relative;
  flex: 1;

  margin: 0 auto;
  max-width: 1280px;
  padding: 4rem 2rem;

  z-index: 2;
`;

function ContentLayout(props) {
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

ContentLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ContentLayout;
