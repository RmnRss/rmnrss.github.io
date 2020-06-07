import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
      scroll-behavior: smooth;
  }
  
  body {
    font-family: ${props => props.theme.fontFamily};
    
    color: ${props => (props.light ? props.theme.dark : props.theme.light)};
    letter-spacing: 0.0015em;
    
    background-color: ${props =>
      props.light ? props.theme.light : props.theme.dark};
    margin: 0;
  }
  
  h1, h2 {
    font-size: clamp(2em, 2.5vw, 4em);
  }
  
  h1 {
    font-weight: 800;
  }

  h2 {
    font-weight: 700;
    margin: 1rem 0;
  }

  h3 {
    font-size: clamp(1em, 2vw, 2em);
    font-weight: 600;
  }
  
  h4 {
    font-size: clamp(1.25em, 2vw, 1.5em);
    font-weight: bold;
  }
  
  p,b {
    font-size: 1em;
    line-height: 1.5em;
  }
  
  p {
    font-weight: normal;
    text-transform: none;
    color: ${props => props.theme.dark};
    max-width: 640px;
  }
  
  a,
  a:visited {
    color: ${props => props.theme.secondary};
    font-weight: 700;
    text-decoration: none;
  }

  img {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
`;

export default GlobalStyle;
