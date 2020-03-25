import React from 'react';

import LayoutContent from '../components/LayoutContent';
import Body from '../components/Body';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Content = styled(LayoutContent)`
  text-align: center;

  && {
    height: fill-available;
    justify-content: center;
    align-items: center;
  }
`;

const Test = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Body>
      <Content></Content>
    </Body>
  );
};

export default Test;
