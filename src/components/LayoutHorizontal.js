import React from 'react';
import PropTypes from 'prop-types';
import Body from './Body';
import Navigator from './Navigator';
import FlexboxRow from './FlexboxRow';
import useWindowWidth from '../utils/dimension';
import breakpoints from '../utils/breakpoints';
import Header from './Header';

const LayoutHorizontal = ({ children, theme }) => {
  const winWidth = useWindowWidth();

  return (
    <Body theme={theme}>
      <FlexboxRow>
        {
          winWidth <= breakpoints.xxlg && (
            <Header horizontal>
              {children}
            </Header>
          )
        }
        {
          winWidth > breakpoints.xxlg && (
            <Navigator horizontal>
              {children}
            </Navigator>
          )
        }
      </FlexboxRow>

    </Body>
  );
};

LayoutHorizontal.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutHorizontal;
