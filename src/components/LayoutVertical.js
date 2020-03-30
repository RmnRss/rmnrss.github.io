import React from 'react';
import PropTypes from 'prop-types';
import Body from './Body';
import Navigator from './Navigator';
import styled from 'styled-components';
import useWindowWidth from '../utils/dimension';
import Header from './Header';
import Footer from './Footer';
import theme from '../styles/theme';
import breakpoints from '../utils/breakpoints';

const Vertical = styled.div`
  overflow-x: hidden;
`;

const LayoutVertical = ({ children }) => {
  const winWidth = useWindowWidth();

  return (
    <Body>
      <Vertical>
        {
          winWidth <= breakpoints.xxlg && (
            <Header>
              {children}
            </Header>
          )
        }
        {
          winWidth > breakpoints.xxlg && (
            <Navigator>
              {children}
            </Navigator>
          )
        }
      </Vertical>
      <Footer backgroundColor={theme.primary}/>
    </Body>
  );
};

LayoutVertical.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutVertical;
