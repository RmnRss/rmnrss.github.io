import { createGlobalStyle } from "styled-components";

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
    font-family: ${(props) => props.theme.fontFamily};
    
    color: ${(props) => props.theme.light};
    letter-spacing: 0.0015em;
    
    background-color: ${(props) => props.theme.dark};
    margin: 0;
  }
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  h2 {
    margin: 1rem 0;

    font-size: 2rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 600;
  }
  
  h4 {
    font-size: clamp(1.25em, 2vw, 1.5em);
    font-weight: bold;
  }
  
  p,b {
    font-size: 1em;
    line-height: 1.5;
  }
  
  p {
    font-weight: normal;
    text-transform: none;
    font-family: "Inter";

    color: ${(props) => props.theme.black};
    max-width: 640px;
  }
  
  a,
  a:visited {
    color: inherit;
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
