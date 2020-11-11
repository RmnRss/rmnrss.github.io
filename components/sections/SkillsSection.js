import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import Breakpoints from "../../utils/breakpoints";
import Chip from "../Chip";
import SkillIcon from "../SkillIcon";
import Section from "./Section";

const IconGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(8, 1fr);
  grid-gap: 2rem;

  justify-items: stretch;
  align-items: center;

  max-width: 1024px;

  margin: 2rem auto;

  @media screen and (max-width: ${Breakpoints.sm}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TabRow = styled.div`
  display: grid;

  grid-template-columns: repeat(4, auto);
  grid-gap: 2rem;

  justify-items: center;
  align-items: center;

  margin: 2rem auto;

  max-width: 1024px;

  @media screen and (max-width: ${Breakpoints.xlg}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${Breakpoints.sm}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.dark};
`;

export default function SkillsSection({ skillCategories }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  function toggleCategory(category) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter(function (e) {
          return e !== category;
        })
      );
    } else {
      setSelectedCategories([category, ...selectedCategories]);
    }
  }

  return (
    <Section id={"Skills"} backgroundColor={"lightBlue"}>
      <Title>A happy gathering of tools, framework and technology I use</Title>

      <TabRow>
        {skillCategories.map((category) => {
          return (
            <Chip
              key={category.sys.id}
              label={category.fields.name}
              color={category.fields.color}
              onClick={() => toggleCategory(category.fields.name)}
              selected={selectedCategories.includes(category.fields.name)}
            />
          );
        })}
      </TabRow>

      <IconGrid>
        {skillCategories.map((category) => {
          return category.fields.skills.map((skill) => {
            return (
              <SkillIcon
                key={skill.sys.id}
                color={category.fields.color}
                name={skill.fields.name}
                iconName={skill.fields.iconName}
                href={skill.fields.url}
                active={selectedCategories.includes(category.fields.name)}
              />
            );
          });
        })}
      </IconGrid>
    </Section>
  );
}

SkillsSection.propTypes = {
  skillCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
