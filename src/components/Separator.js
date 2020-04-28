import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
  display: block;
  height: 3px;
  width: ${props => props.width};
  background: ${props => props.color};
  margin: ${props => props.margin};
`;

const Separator = ({ color, className, margin,  width }) => {
  return <Element color={color} className={className} margin={margin} width={width} />;
};

Separator.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
};

Separator.defaultProps = {
  color: `#181818`,
  margin: '1rem 0',
  width: '4rem',
};

export default Separator;
