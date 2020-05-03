import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/main-theme';
import SEO from '../../components/seo';
import Section from '../../components/Section';
import FlexboxColumn from '../../components/FlexboxColumn';
import ButtonLink from '../../components/ButtonLink';
import TtflTheme from '../../styles/ttfl-theme';
import Footer from '../../components/Footer';
import LayoutHorizontal from '../../components/LayoutHorizontal';

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

      <LayoutHorizontal theme={TtflTheme}>
        <Section backgroundColor={theme.light}>
          <ContentCenter alignItems={'center'}>
            <h3 style={{ textAlign: 'center' }}>
              This project is currently in the works :)
            </h3>

            <ButtonLink
              to={'/'}
              label={'Main page'}
              hoverBackgroundColor={'#febe81'}
              hoverColor={'#fafafa'}
            />
          </ContentCenter>
        </Section>
        <FixedFooter backgroundColor={theme.light} />
      </LayoutHorizontal>
    </>
  );
};

export default InProgress;
