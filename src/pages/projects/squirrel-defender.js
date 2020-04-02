import React from 'react';
import styled from 'styled-components';
import BackgroundTitle from '../../components/BackgroundTitle';
import theme from '../../styles/theme';
import LayoutHorizontal from '../../components/LayoutHorizontal';
import SEO from '../../components/seo';
import Section from '../../components/Section';
import FlexboxColumn from '../../components/FlexboxColumn';
import ButtonLink from '../../components/ButtonLink';

const ContentCenter = styled(FlexboxColumn)`
  margin: auto;
  z-index: 0;
`;

const SquirrelDefender = () => {
  return (
    <>
      <SEO title="Squirrel Defender"/>

      <LayoutHorizontal>
        <div className={'Intro'} id="intro-section">
          <Section horizontal backgroundColor={theme.light}>
            <ContentCenter alignItems={'center'}>
              <BackgroundTitle label={'Coming soon...'} color={theme.dark}/>
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
        </div>
      </LayoutHorizontal>
    </>
  );
};

export default SquirrelDefender;
