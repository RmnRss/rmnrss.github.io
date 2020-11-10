import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
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

export default function SkillsSection({ skillsCategories }) {
  const [skills, setSkills] = useState([]);
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

  useEffect(
    function () {
      let allSkills = [];

      skillsCategories.map((edge) => {
        const category = edge.node;
        allSkills = allSkills.concat(category.skills);
      });

      setSkills(allSkills);

      return () => setSkills([]);
    },
    [skillsCategories]
  );

  return (
    <Section id={"Skills"} backgroundColor={"lightBlue"}>
      <Title>A happy gathering of tools, framework and technology I use</Title>

      <TabRow>
        {skillsCategories.map((edge, index) => {
          let category = edge.node;

          return (
            <Chip
              key={category.id}
              label={category.name}
              color={category.color}
              onClick={() => toggleCategory(category.name)}
              selected={selectedCategories.includes(category.name)}
            />
          );
        })}
      </TabRow>

      <IconGrid>
        {skills.map((skill) => {
          const category = skill.skill_category[0];
          return (
            <SkillIcon
              key={skill.id}
              color={category.color}
              name={skill.name}
              iconName={skill.iconName}
              href={skill.url}
              active={selectedCategories.includes(category.name)}
            />
          );
        })}
      </IconGrid>
    </Section>
  );
}

SkillsSection.propTypes = {
  skillsCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
