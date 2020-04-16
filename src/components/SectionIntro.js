import React from 'react';
import styled from 'styled-components';
import FlexboxColumn from './FlexboxColumn';
import FlexboxRow from './FlexboxRow';
import useWindowWidth from '../utils/dimension';
import Section from './Section';
import TopicDescription from './TopicDescription';

const BackgroundFill = styled.div`
  position: absolute;
  left: 50%;

  width: 50vw;
  height: 100%;
  z-index: -999;
  background: ${props => props.theme.secondary};

  @media (max-width: 1280px) {
    display: none;
  }
`;

const Grid = styled.div`
  position: relative;
  margin: auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1280px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Column = styled(FlexboxColumn)`
  padding: 1rem;
`;

const RightColumn = styled(Column)`
  background: ${props => props.theme.secondary};
`;

const FirstName = styled.h1`
  font-size: 6.625rem;
  line-height: 7rem;
  letter-spacing: -0.0415em;

  margin: 0;
  color: ${props => props.theme.secondary};
`;

const LastName = styled(FirstName)`
  && {
    color: ${props => props.theme.secondaryDark};
  }
`;

const Sep = styled.div`
  display: block;
  background: ${props => props.theme.primary};
  height: 4px;
  width: 3rem;

  margin: 1rem 0;
`;

const Text = styled.p`
  margin: 0;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

const Subtitle = styled.h4`
  margin: 0 0 1rem 0;
`;

const SkillCardContainer = styled(FlexboxColumn)`
  position: relative;
  padding: 1rem;
  background-color: ${props => props.theme.light};
  overflow: hidden;
  
  border-radius: 1px;
  
  &:after {
    content: '';
    position: absolute;
    top: 0%;
    left: 0%;
    
    display: block;
    width: 4px;
    height: 192px;
    background-color: ${props => props.theme.purpleDark};
  }
`;

const Icon = styled.i`
  position: relative;
  color: ${props => props.theme.purpleLight};
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

const Name = () => {
  return (
    <FlexboxColumn>
      <FirstName>Romain</FirstName>
      <LastName>Rousseau</LastName>
    </FlexboxColumn>
  );
};

const Infos = () => {
  return (
    <>
      <Sep/>
      <Text>24 years old</Text>
      <Text>
        Student in <b>Computer Science Engineering</b>
      </Text>
      <Text>
        Specialized <b>Human-Machine Interactions</b>
      </Text>
      <Text>Not an astronaut</Text>
    </>
  );
};

const SkillsCard = () => {
  return (
    <CardGrid>
      <SkillCardContainer>
        <b>Web & Mobile Development</b>
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
      </SkillCardContainer>
      <SkillCardContainer>
        <b>UI/UX Design</b>
        <FlexboxRow>
          <Icon className={'fab fa-figma'}>
            <TooltipText>Figma</TooltipText>
          </Icon>
        </FlexboxRow>
      </SkillCardContainer>
      <SkillCardContainer>
        <b>IT Projects Management</b>
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
      </SkillCardContainer>
      <SkillCardContainer>
        <b>Programming Languages</b>
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
      </SkillCardContainer>
    </CardGrid>
  );
};

const SectionIntro = () => {
  return (
    <Section>
      <Grid>
        <Column alignItems={'flex-start'} justifyContent={'center'}>
          <Name/>
          <Infos/>
        </Column>
        <RightColumn alignItems={'flex-start'} justifyContent={'center'}>
          <BackgroundFill/>

          <Subtitle>My interests & hobbies</Subtitle>
          <TopicDescription
            title={'Basketball'}
            iconLibrary={'material'}
            iconName={'sports_basketball'}
            description={
              'Basketball was my first passion. Playing it made me learn about my thrive for competition, ' +
              'team-work and the importance of practice and execution. '
            }
          />
          <TopicDescription
            title={'Video Games'}
            iconLibrary={'material'}
            iconName={'sports_esports'}
            description={
              'From exploration to discoveries through competition and creation video-games can take you anywhere ' +
              'from the comfort of your home! '
            }
          />
          <TopicDescription
            title={'Science-Fiction'}
            iconLibrary={'fontawesome'}
            iconName={'fas fa-meteor'}
            description={
              'I love discovering new world and ideas, and a lot of it happens through Sci-Fi for me. ' +
              'When it comes, to watching, playing, reading, or even listening to Science-Fiction ' +
              'my towels are always ready and upgraded.'
            }
          />
          <TopicDescription
            title={'Traveling'}
            iconLibrary={'material'}
            iconName={'map'}
            description={
              '“Once you start travelling you can never stop”. ' +
              'That quote turned out to be true for me too, I enjoy travelling and think it has open my mind over the years.'
            }
          />
          <Subtitle>Technical Skills</Subtitle>
          <SkillsCard/>
        </RightColumn>
      </Grid>
    </Section>
  );
};

SectionIntro.propTypes = {};

SectionIntro.defaultProps = {};

export default SectionIntro;
