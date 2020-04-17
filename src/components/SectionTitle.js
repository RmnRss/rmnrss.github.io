import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitlePart = styled.h1`
  font-size: 6.625rem;
  line-height: 7rem;
  letter-spacing: -0.0415em;

  margin: 0;
  color: ${props => props.color};
`;


const SectionTitle = ({ color, children }) => {
  return (
    <TitlePart color={color}>
      {children}
    </TitlePart>
  );
};

SectionTitle.propTypes = {
  color: PropTypes.string,
};

SectionTitle.defaultProps = {
  color: '#000',
};

export default SectionTitle;
