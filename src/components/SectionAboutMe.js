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
      <Separator color={'#22CAAC'} margin={'2rem 0 1rem 0'} width={'3rem'} />
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

const SectionAboutMe = ({ hobbies, skillsCategory }) => {
  return (
    <Section>
      <Grid>
        <Column alignItems={'stretch'} justifyContent={'center'}>
          <Infos />
        </Column>
        <RightColumn alignItems={'stretch'} justifyContent={'center'}>
          <BackgroundFill />

          <Subtitle>My interests & hobbies</Subtitle>
          {hobbies.map(obj => {
            let hobby = obj.node;
            return (
              <CardHobby
                title={hobby.name}
                iconLibrary={hobby.iconLibrary}
                iconName={hobby.iconName}
                description={hobby.description.description}
              />
            );
          })}
          <Subtitle>Technical Skills</Subtitle>
          <CardGrid>
            {skillsCategory.map(obj => {
              let category = obj.node;
              return (
                <CardSkills title={category.name}>
                  {category.skills.map(skill => (
                    <SkillIcon
                      className={`fab ${skill.iconName}`}
                      href={skill.url}
                    />
                  ))}
                </CardSkills>
              );
            })}
          </CardGrid>
        </RightColumn>
      </Grid>
    </Section>
  );
};

SectionAboutMe.propTypes = {};

SectionAboutMe.defaultProps = {};

export default SectionAboutMe;
