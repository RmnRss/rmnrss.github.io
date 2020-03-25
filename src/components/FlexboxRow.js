import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;

const FlexboxRow = ({ className, children, justifyContent, alignItems,onClick }) => {
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

FlexboxRow.propTypes = {
  alignItems: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  justifyContent: PropTypes.string,
};

export default FlexboxRow;
