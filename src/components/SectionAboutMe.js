import React from 'react';
import styled from 'styled-components';
import FlexboxColumn from './FlexboxColumn';
import Section from './Section';
import CardHobby from './CardHobby';
import SectionTitle from './SectionTitle';
import Separator from './Separator';
import CardSkills from './CardSkills';
import ClickableIcon from './ClickableIcon';

const BackgroundFill = styled.div`
  position: absolute;
  left: 50%;

  width: 50vw;
  height: 100%;
  z-index: -999;
  background: ${props => props.theme.primary};

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
  z-index: 1;
  padding: 2rem;
`;

const RightColumn = styled(Column)`
  z-index: 2;
  background: ${props => props.theme.primary};
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

const SkillIcon = ({ className, href }) => {
  return (
    <ClickableIcon
      iconName={className}
      href={href}
      size={32}
      color={'#7B6BC6'}
      hoverColor={'#312952'}
    />
  );
};

const Infos = () => {
  return (
    <FlexboxColumn>
      <SectionTitle color={'#FEBE81'}>Romain</SectionTitle>
      <SectionTitle color={'#EFA45D'}>Rousseau</SectionTitle>
      <Separator color={'#22CAAC'} margin={'2rem 0 1rem 0'} width={'3rem'}/>
      <Text>24 years old</Text>
      <Text>
        Student in <b>Computer Science Engineering</b>
      </Text>
      <Text>
        Specialized <b>Human-Machine Interactions</b>
      </Text>
      <Text>Not an astronaut</Text>
    </FlexboxColumn>
  );
};

const SkillsCard = () => {
  return (
    <CardGrid>
      <CardSkills title={'Web & Mobile Development'}>
        <SkillIcon className={'fab fa-angular'} href={'https://angular.io/'}/>
        <SkillIcon className={'fab fa-react'} href={'https://reactjs.org/'}/>
        <SkillIcon
          className={'fab fa-bootstrap'}
          href={'https://getbootstrap.com/'}
        />
        <SkillIcon
          className={'fab fa-android'}
          href={'https://developer.android.com/studio'}
        />
      </CardSkills>
      <CardSkills title={`UI/UX Design`}>
        <SkillIcon className={'fab fa-figma'} href={'https://www.figma.com/'}/>
        <SkillIcon
          className={'fab fa-adobe'}
          href={'https://www.adobe.com/ch_fr/products/xd.html'}
        />
      </CardSkills>
      <CardSkills title={'IT Projects Management'}>
        <SkillIcon className={'fab fa-git-alt'} href={'https://git-scm.com/'}/>
        <SkillIcon
          className={'fab fa-gitkraken'}
          href={'https://www.gitkraken.com/'}
        />
        <SkillIcon className={'fab fa-npm'} href={'https://www.npmjs.com/'}/>
        <SkillIcon className={'fab fa-node-js'} href={'https://nodejs.org/'}/>
      </CardSkills>
      <CardSkills title={`Programming Languages`}>
        <SkillIcon className={'fab fa-js'}/>
        <SkillIcon className={'fab fa-java'} href={'https://www.java.com'}/>
        <SkillIcon
          className={'fab fa-python'}
          href={'https://www.python.org/'}
        />
      </CardSkills>
    </CardGrid>
  );
};

const SectionAboutMe = () => {
  return (
    <Section>
      <Grid>
        <Column alignItems={'stretch'} justifyContent={'center'}>
          <Infos/>
        </Column>
        <RightColumn alignItems={'stretch'} justifyContent={'center'}>
          <BackgroundFill/>

          <Subtitle>My interests & hobbies</Subtitle>
          <CardHobby
            title={'Basketball'}
            iconLibrary={'material'}
            iconName={'sports_basketball'}
            description={
              'Basketball was my first passion. Playing it made me learn about my thrive for competition, ' +
              'team-work and the importance of practice and execution. '
            }
          />
          <CardHobby
            title={'Video Games'}
            iconLibrary={'material'}
            iconName={'sports_esports'}
            description={
              'From exploration to discoveries through competition and creation video-games can take you anywhere ' +
              'from the comfort of your home! '
            }
          />
          <CardHobby
            title={'Science-Fiction'}
            iconLibrary={'fontawesome'}
            iconName={'fas fa-meteor'}
            description={
              'I love discovering new world and ideas, and a lot of it happens through Sci-Fi for me. ' +
              'When it comes, to watching, playing, reading, or even listening to Science-Fiction ' +
              'my towels are always ready and upgraded.'
            }
          />
          <CardHobby
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

SectionAboutMe.propTypes = {};

SectionAboutMe.defaultProps = {};

export default SectionAboutMe;
