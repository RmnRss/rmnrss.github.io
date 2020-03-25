import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;

const FlexboxColumn = ({ className, children, justifyContent, alignItems, onClick }) => {
  return (
    <FlexBox
      onClick={onClick}
      className={className}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </FlexBox>
  );
};

FlexboxColumn.propTypes = {
  alignItems: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  justifyContent: PropTypes.string,
};

export default FlexboxColumn;
