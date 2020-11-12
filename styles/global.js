import { createGlobalStyle } from "styled-components";
import Breakpoints from "../utils/breakpoints";

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
    font-size: 1.25rem;
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

  .swoop-in {
    position: relative;
    z-index: 0;

    overflow: hidden;

    transition: 0.4s ease;
    
    &:after {
      content: "";
      display: block;

      position: absolute;
      z-index: -1;
      left: -10%;
      bottom: 0%;

      height: 120%;
      width: 0;

      background: ${(props) => props.theme.primary};

      transform: skewX(15deg);
      transition: 0.3s ease;
    }

    &:hover {
      background-color: transparent;
      cursor: pointer;
    }

    &:hover:after {
      width: 120%;
    }
  }

  @media screen and (max-width: ${Breakpoints.md}px){
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3,
    h4 {
    font-size: 1.25rem;
    }
  }

  
`;

export default GlobalStyle;
