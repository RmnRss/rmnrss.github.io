import React from "react";
import PropTypes from "prop-types";
import Body from './Body';
import Navigator from './Navigator';
import styled from 'styled-components';
import FlexboxRow from './FlexboxRow';

const HorizontalNavigator = styled(Navigator)`
  && {
      bottom: 0%;

      flex-direction: row;
      align-items: center;
      justify-content: center;
  }
`;

const LayoutHorizontal = ({ children }) => {
  return (
    <Body>
      <FlexboxRow>
        <Navigator horizontal>
          {children}
        </Navigator>
      </FlexboxRow>

    </Body>
  );
};

LayoutHorizontal.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutHorizontal;
