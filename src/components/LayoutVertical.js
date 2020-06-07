import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import theme from '../styles/main-theme';
import breakpoints from '../utils/breakpoints';
import useWindowWidth from '../utils/dimension';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Navigator from './Navigator';

const Vertical = styled.div`
  overflow-x: hidden;
`;

function LayoutVertical(props) {
  const winWidth = useWindowWidth();

  return (
    <Body theme={theme}>
      <Vertical>
        {winWidth <= breakpoints.xxlg && <Header>{props.children}</Header>}
        {winWidth > breakpoints.xxlg && <Navigator>{props.children}</Navigator>}
      </Vertical>
      <Footer backgroundColor={theme.light} />
    </Body>
  );
}

LayoutVertical.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutVertical;
