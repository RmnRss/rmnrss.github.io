import React from 'react';
import PropTypes from 'prop-types';
import Body from './Body';
import Navigator from './Navigator';
import FlexboxRow from './FlexboxRow';

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
