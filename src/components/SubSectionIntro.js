import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { ReactComponent as FlatMeSVG } from '../assets/svg/me-portrait.svg';
import FlexboxColumn from './FlexboxColumn';
import FlexboxRow from './FlexboxRow';
import useWindowWidth from '../utils/dimension';
import breakpoints from '../utils/breakpoints';

const Container = styled(FlexboxColumn)`
  padding: 1rem;
`;

const CardsContainer = styled(FlexboxRow)`
  padding: 1rem;
`;

const SectionTitleContainer = styled(FlexboxRow)`
  color: ${props => props.theme.secondary};
  margin-bottom: 1rem;
`;

const LeftCard = styled(Card)`
  && {
    padding: 0.5rem;
    margin: 0.5rem;
    flex-order: 1;
  }
`;

const CenterCard = styled(Card)`
  && {
    padding: 0.5rem;
        margin: 0.5rem;
    z-index: 1;
    flex-order: 0;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightCard = styled(Card)`
  && {
    padding: 0.5rem;
    z-index: 0;
    margin: 0.5rem;
    flex-order: 2;
  }
`;

const Text = styled.p`
  color: ${props => props.theme.light};
  margin: 0;
`;

const TextItalic = styled(Text)`
  font-size: 0.75rem;
  font-style: italic;
  margin: 0.5rem 0;
`;

const SectionTitleBlue = styled.b`
  color: ${props => props.theme.secondary};
  margin: 0 0.5rem 0 0.5rem;
`;

const Icon = styled.i`
  position: relative;
  color: ${props => props.theme.secondary};
  font-size: 2rem;
  margin: 0.5rem;
`;

const TooltipText = styled.p`
  visibility: hidden;

  font-family: ${props => props.theme.fontFamily};
  font-size: 0.5em;

  color: ${props => props.theme.primary};

  position: absolute;
  z-index: 1;
  top: 75%;
  left: 0%;

  text-wrap: no-wrap;

  opacity: 0;
  transition: opacity 0.3s;
`;

const SectionTitleWhite = styled.b`
  color: ${props => props.theme.light};
  margin: 0 0.5rem 0 0.5rem;
`;

const Name = styled.h2`
  color: ${props => props.theme.secondary};
  font-size: 2rem;
`;

const SVG = styled(FlatMeSVG)`
  width: 224px;
  height: 224px;
`;

const InfoCard = () => {
  return (
    <LeftCard width={'320px'} backgroundColor={'#312953'}>
      <Container>
        <SectionTitleContainer
          justifyContent={'flex-start'}
          alignItems={'center'}
        >
          <i className={'material-icons'}>person</i>
          <SectionTitleBlue>Information</SectionTitleBlue>
        </SectionTitleContainer>
        <Text>24 years old</Text>
        <Text>Student</Text>
      </Container>
      <Container>
        <SectionTitleContainer
          justifyContent={'flex-start'}
          alignItems={'center'}
        >
          <i className={'material-icons'}>school</i>
          <SectionTitleBlue>Education</SectionTitleBlue>
        </SectionTitleContainer>
        <Text>Computer Science Engineering</Text>
        <Text>Human-Machine Interactions</Text>
        <Text>UI/UX Design</Text>
      </Container>
    </LeftCard>
  );
};

const ProfileCard = () => {
  return (
    <CenterCard width={'320px'} height={'512px'} backgroundColor={'#312953'}>
      <Container alignItems={'center'} justifyContent={'center'}>
        <SVG/>
        <Name>Romain</Name>
        <TextItalic>not an astronaut :(</TextItalic>
      </Container>
    </CenterCard>
  );
};

const SkillsCard = () => {
  return (
    <RightCard width={'320px'} backgroundColor={'#312953'}>
      <Container>
        <SectionTitleWhite>Web & Mobile Development</SectionTitleWhite>
        <FlexboxRow>
          <Icon className={'fab fa-angular'}>
            <TooltipText>Angular</TooltipText>
          </Icon>
          <Icon className={'fab fa-react'}>
            <TooltipText>React</TooltipText>
          </Icon>
          <Icon className={'fab fa-bootstrap'}>
            <TooltipText>Bootstrap</TooltipText>
          </Icon>
          <Icon className={'fab fa-android'}>
            <TooltipText>Android</TooltipText>
          </Icon>
        </FlexboxRow>
      </Container>
      <Container>
        <SectionTitleWhite>UI/UX Design</SectionTitleWhite>
        <FlexboxRow>
          <Icon className={'fab fa-figma'}>
            <TooltipText>Figma</TooltipText>
          </Icon>
        </FlexboxRow>
      </Container>
      <Container>
        <SectionTitleWhite>IT Projects Management</SectionTitleWhite>
        <FlexboxRow>
          <Icon className={'fab fa-git-alt'}>
            <TooltipText>Git</TooltipText>
          </Icon>
          <Icon className={'fab fa-gitkraken'}>
            <TooltipText>Gitkraken</TooltipText>
          </Icon>
          <Icon className={'fab fa-npm'}>
            <TooltipText>npm</TooltipText>
          </Icon>
          <Icon className={'fab fa-node-js'}>
            <TooltipText>node-js</TooltipText>
          </Icon>
        </FlexboxRow>
      </Container>
      <Container>
        <SectionTitleWhite>Programming Languages</SectionTitleWhite>
        <FlexboxRow>
          <Icon className={'fab fa-js'}>
            <TooltipText>Javascript</TooltipText>
          </Icon>
          <Icon className={'fab fa-java'}>
            <TooltipText>Java</TooltipText>
          </Icon>
          <Icon className={'fab fa-python'}>
            <TooltipText>Python</TooltipText>
          </Icon>
        </FlexboxRow>
      </Container>
    </RightCard>
  );
};

const SubSectionIntro = () => {
  const winWidth = useWindowWidth();

  return (
    <>
      {winWidth > breakpoints.lg && (
        <CardsContainer justifyContent={'center'} alignItems={'center'}>
          <InfoCard/>
          <ProfileCard/>
          <SkillsCard/>
        </CardsContainer>
      )}
      {winWidth <=
      breakpoints.lg && (
        <FlexboxColumn justifyContent={'center'} alignItems={'center'}>
          <ProfileCard/>
          <InfoCard/>
          <SkillsCard/>
        </FlexboxColumn>
      )}
    </>
  );
};

SubSectionIntro.propTypes = {};

SubSectionIntro.defaultProps = {};

export default SubSectionIntro;
