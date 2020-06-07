import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import LayoutContent from './LayoutContent';

const SectionContainer = styled.section`
  position: relative;
  display: flex;

  width: ${props => (props.horizontal ? '100vw' : '100%')};
  min-height: 100vh;
  padding: 0;
  background-color: ${props => props.backgroundColor};
`;

function Section(props) {
  return (
    <SectionContainer
      backgroundColor={props.backgroundColor}
      horizontal={props.horizontal}
    >
      {props.animatedBackground}
      <LayoutContent>{props.children}</LayoutContent>
    </SectionContainer>
  );
}

Section.propTypes = {
  /* The background color of the section*/
  backgroundColor: PropTypes.string,
  /* The background of the section*/
  animatedBackground: PropTypes.node,
  /* The title of the section */
  title: PropTypes.string,
  /* Represents if the section scrolls horizontally or not */
  horizontal: PropTypes.bool,
};

Section.defaultProps = {
  backgroundColor: 'transparent',
  title: '',
  horizontal: false,
};

export default Section;
