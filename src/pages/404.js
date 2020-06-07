import React from 'react';
import SEO from '../components/seo';
import Body from '../components/Body';
import theme from '../styles/main-theme';
import styled from 'styled-components';
import Footer from '../components/Footer';
import SectionHead from '../components/SectionHead';
import Button from '../components/Button';

const Number = styled.h1`
  font-size: 8rem;
  text-align: center;
  color: #fafafa;

  margin: 1rem 0;
`;

const Subtitle = styled.h2`
  text-align: center;
  color: #fafafa;
  margin: 1rem 0;
`;

const Text = styled.p`
  text-align: center;
  color: #fafafa;
  margin-bottom: 2rem;
`;

const FixedFooter = styled(Footer)`
  position: fixed;
  bottom: 0%;
  width: 100%;
`;

const NotFoundPage = () => (
  <>
    <SEO title="Page not found." />
    <Body theme={theme}>
      <SectionHead>
        <Number>404</Number>
        <Subtitle>PAGE NOT FOUND</Subtitle>
        <Text>
          Apparently this page doesn't exist... Weird.
          <br />
          You can go back or use the button below to go back to the main page.
        </Text>

        <Button
          to={'/'}
          label={'Main page'}
          color={'dark'}
          hoverColor={'primary'}
        />
      </SectionHead>
      <FixedFooter backgroundColor={theme.light} />
    </Body>
  </>
);

export default NotFoundPage;
