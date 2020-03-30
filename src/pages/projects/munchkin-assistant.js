import React from 'react';
import styled from 'styled-components';
import BackgroundTitle from '../../components/BackgroundTitle';
import theme from '../../styles/theme';
import Button from '../../components/Button';
import LayoutHorizontal from '../../components/LayoutHorizontal';
import SEO from '../../components/seo';
import Section from '../../components/Section';
import FlexboxColumn from '../../components/FlexboxColumn';

const ContentCenter = styled(FlexboxColumn)`
  margin: auto;
  z-index: 0;
`;

const MunchkinAssistant = () => {
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

              <Button
                link
                to={'/'}
                label={'' + 'Main page'}
                backgroundColor={'#22CAAC'}
                hoverBackgroundColor={'#181818'}
                color={'#FAFAFA'}
                hoverColor={'#22CAAC'}
              />
            </ContentCenter>
          </Section>
        </div>
      </LayoutHorizontal>
    </>
  );
};

export default MunchkinAssistant;
