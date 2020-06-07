import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/main-theme';
import SEO from '../../components/seo';
import Section from '../../components/Section';
import FlexboxColumn from '../../components/FlexboxColumn';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Body from '../../components/Body';

const ContentCenter = styled(FlexboxColumn)`
  margin: auto;
  z-index: 0;
`;

const FixedFooter = styled(Footer)`
  position: fixed;
  bottom: 0%;
  width: 100%;
`;

const InProgress = () => {
  return (
    <>
      <SEO title="Coming soon." />

      <Body theme={theme}>
        <Section backgroundColor={theme.light}>
          <ContentCenter alignItems={'center'}>
            <h3 style={{ textAlign: 'center' }}>
              This project is currently in the works :)
            </h3>

            <Button
              to={'/'}
              label={'Main page'}
              color={'dark'}
              hoverColor={'primary'}
            />
          </ContentCenter>
        </Section>
        <FixedFooter backgroundColor={theme.light} />
      </Body>
    </>
  );
};

export default InProgress;
