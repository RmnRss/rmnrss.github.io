import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';

const Body = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle light />
    </ThemeProvider>
  );
};

Body.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default Body;
