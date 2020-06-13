import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import breakpoints from "../../utils/breakpoints";
import HobbyCard from "../cards/HobbyCard";
import SkillsCard from "../cards/SkillsCard";
import FlexboxColumn from "../FlexboxColumn";
import Separator from "../Separator";
import SkillIcon from "../SkillIcon";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const BackgroundFill = styled.div`
  position: absolute;
  left: 50%;

  width: 50vw;
  height: 100%;
  z-index: -999;
  background: ${props => props.theme.primary};

  @media (max-width: ${breakpoints.xlg}px) {
    display: none;
  }
`;

const Grid = styled.div`
  position: relative;
  margin: auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${breakpoints.xlg}px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 768px;
    margin: auto;
  }
`;

const Column = styled(FlexboxColumn)`
  padding: 2rem;
`;

const RightColumn = styled(Column)`
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

  @media screen and (max-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Subtitle = styled.h4`
  margin: 0 0 1rem 0;
`;

function AboutMeSection(props) {
  const description = documentToHtmlString(
    props.me.childContentfulOwnerDescriptionRichTextNode.json
  );
  return (
    <Section>
      <Grid>
        <Column alignItems={"stretch"} justifyContent={"center"}>
          <SectionTitle color={"#FEBE81"}>{props.me.firstName}</SectionTitle>
          <SectionTitle color={"#EFA45D"}>{props.me.lastName}</SectionTitle>
          <Separator
            color={"#22CAAC"}
            margin={"1rem 0 1rem 0"}
            width={"3rem"}
          />
          <Description dangerouslySetInnerHTML={{ __html: description }} />
        </Column>
        <RightColumn alignItems={"stretch"} justifyContent={"center"}>
          <BackgroundFill />

          <Subtitle>My interests & hobbies</Subtitle>
          {props.hobbies.map(obj => {
            let hobby = obj.node;
            return (
              <HobbyCard
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
                <SkillsCard key={category.id} title={category.name}>
                  {category.skills.map(skill => (
                    <SkillIcon
                      key={skill.id}
                      className={`fab ${skill.iconName}`}
                      href={skill.url}
                    />
                  ))}
                </SkillsCard>
              );
            })}
          </CardGrid>
        </RightColumn>
      </Grid>
    </Section>
  );
}

AboutMeSection.propTypes = {
  me: PropTypes.object.isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.object).isRequired,
  skillsCategory: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AboutMeSection;
