import React from "react";
import styled from "styled-components";
import { ReactComponent as FlatMeSVG } from "../assets/svg/me-space.svg";
import breakpoints from "../utils/breakpoints";

const SVGContainer = styled(FlatMeSVG)`
  @media screen and (max-width: ${breakpoints.lg}px) {
    width: 75%;
    height: 240px;
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    width: 75%;
    height: 180px;
  }
`;

export default function SpaceMe() {
  return <SVGContainer />;
}
