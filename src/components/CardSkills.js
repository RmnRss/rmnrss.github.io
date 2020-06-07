import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import AnimatedComponentInView from './AnimatedComponentInView';
import FlexboxColumn from './FlexboxColumn';
import FlexboxRow from './FlexboxRow';

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

  opacity: 0;
  transform: translateX(12vh);
  visibility: hidden;
  transition: opacity 0.5s ease-out, transform 0.6s ease-out;

  &.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`;

const CardSkills = ({ children, title }) => {
  return (
    <AnimatedComponentInView>
      <SkillCardContainer>
        <b>{title}</b>
        <FlexboxRow justifyContent={'flex-start'} alignItems={'center'}>
          {children}
        </FlexboxRow>
      </SkillCardContainer>
    </AnimatedComponentInView>
  );
};

CardSkills.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

CardSkills.defaultProps = {
  title: 'Title',
};

export default CardSkills;
