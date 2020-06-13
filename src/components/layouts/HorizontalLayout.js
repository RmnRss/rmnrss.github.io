import PropTypes from "prop-types";
import React from "react";
import breakpoints from "../../utils/breakpoints";
import useWindowWidth from "../../utils/dimension";
import Body from "../Body";
import FlexboxRow from "../FlexboxRow";
import Header from "../Header";
import Navigator from "../navigation/Navigator";

function HorizontalLayout(props) {
  const winWidth = useWindowWidth();

  return (
    <Body theme={props.theme}>
      <FlexboxRow>
        {winWidth <= breakpoints.xxlg && (
          <Header horizontal>{props.children}</Header>
        )}
        {winWidth > breakpoints.xxlg && (
          <Navigator horizontal>{props.children}</Navigator>
        )}
      </FlexboxRow>
    </Body>
  );
}

HorizontalLayout.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalLayout;