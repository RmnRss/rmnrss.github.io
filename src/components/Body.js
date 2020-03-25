import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  html {
      scroll-behavior: smooth;
  }
  
  body {
    font-family: ${props => props.theme.fontFamily};
    
    color: ${props => (props.light ? props.theme.dark : props.theme.light)};
    background-color: ${props =>
      props.light ? props.theme.light : props.theme.dark};
    margin: 0;
  }

  h1 {
    font-size: clamp(1.5em, 2.5vw, 3em);
    font-weight: bold;
    letter-spacing: 0.0015em;
  }

  h2 {
    font-size: clamp(1.5em, 2.25vw, 2.5em);
    font-weight: bold;
    letter-spacing: 0.0015em;
    margin: 1rem 0;
  }

  h3 {
    font-size: clamp(1em, 2vw, 2em);
    font-weight: 600;
    letter-spacing: 0.0015em;
  }
  
  h4 {
    font-size: clamp(1.25em, 2vw, 1.5em);
    font-weight: bold;
    letter-spacing: 0.0015em;
  }
  
  p {
    font-size: 1em;
    font-weight: normal;
    text-transform: none;
    color: ${props => props.theme.darkLight};
    max-width: 50rem;
  }
  
  a,
  a:visited {
    text-decoration: none;
  }
`;

class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
        <GlobalStyle light />
      </ThemeProvider>
    );
  }
}

Body.propTypes = {};

Body.defaultProps = {};

export default Body;
