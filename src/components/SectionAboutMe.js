import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import CardHobby from './CardHobby';
import CardSkills from './CardSkills';
import ClickableIcon from './ClickableIcon';
import FlexboxColumn from './FlexboxColumn';
import Section from './Section';
import SectionTitle from './SectionTitle';
import Separator from './Separator';

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

const Description = styled.div`
  & p {
    margin: 0;
  }
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
    />
  );
};

function SectionAboutMe(props) {
  const description = documentToHtmlString(
    props.me.childContentfulOwnerDescriptionRichTextNode.json
  );
  return (
    <Section>
      <Grid>
        <Column alignItems={'stretch'} justifyContent={'center'}>
          <FlexboxColumn>
            <SectionTitle color={'#FEBE81'}>{props.me.firstName}</SectionTitle>
            <SectionTitle color={'#EFA45D'}>{props.me.lastName}</SectionTitle>
            <Separator
              color={'#22CAAC'}
              margin={'2rem 0 1rem 0'}
              width={'3rem'}
            />
            <Description dangerouslySetInnerHTML={{ __html: description }} />
          </FlexboxColumn>
        </Column>
        <RightColumn alignItems={'stretch'} justifyContent={'center'}>
          <BackgroundFill />

          <Subtitle>My interests & hobbies</Subtitle>
          {props.hobbies.map(obj => {
            let hobby = obj.node;
            return (
              <CardHobby
                key={hobby.id}
                title={hobby.name}
                iconLibrary={hobby.iconLibrary}
                iconName={hobby.iconName}
                description={hobby.description.description}
              />
            );
          })}
          <Subtitle>Technical Skills</Subtitle>
          <CardGrid>
            {props.skillsCategory.map(obj => {
              let category = obj.node;
              return (
                <CardSkills key={category.id} title={category.name}>
                  {category.skills.map(skill => (
                    <SkillIcon
                      key={skill.id}
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
}

SectionAboutMe.propTypes = {
  me: PropTypes.object.isRequired,
  hobbies: PropTypes.object.isRequired,
  skillsCategory: PropTypes.object.isRequired,
};

export default SectionAboutMe;
