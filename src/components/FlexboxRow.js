import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;

function FlexboxRow(props) {
  return (
    <FlexBox
      onClick={props.onClick}
      className={props.className}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
    >
      {props.children}
    </FlexBox>
  );
}

FlexboxRow.propTypes = {
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

FlexboxRow.defaultProps = {
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
};

export default FlexboxRow;
