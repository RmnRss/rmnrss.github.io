import React from 'react';
import SEO from '../components/seo';
import Body from '../components/Body';
import Button from '../components/Button';
import theme from '../styles/theme';
import styled from 'styled-components';
import Footer from '../components/Footer';
import BackgroundTitle from '../components/BackgroundTitle';
import SectionHead from '../components/SectionHead';

const Subtitle = styled.h1`
  text-align: center;
  color: #fafafa;
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
    <Body>
      <SectionHead>
        <BackgroundTitle label={'404'} color={theme.light} />
        <Subtitle>PAGE NOT FOUND</Subtitle>
        <Text>
          Apparently this page doesn't exist... Weird.
          <br />
          You can go back or use the button below to go back to the main page.
        </Text>

        <Button
          link
          to={'/'}
          label={'' + 'Main page'}
          backgroundColor={'#22CAAC'}
          hoverBackgroundColor={'#181818'}
          color={'#FAFAFA'}
          hoverColor={'#22CAAC'}
        />
      </SectionHead>
      <FixedFooter backgroundColor={theme.light}/>
    </Body>
  </>
);

export default NotFoundPage;
