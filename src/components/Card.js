import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  background-color: ${props => props.backgroundColor};

  border-radius: ${props => props.theme.borderRadius};

  padding: 1rem;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

function Card(props) {
  return (
    <CardContainer
      backgroundColor={props.backgroundColor}
      className={props.className}
    >
      {props.children}
    </CardContainer>
  );
}

Card.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  backgroundColor: 'transparent',
};

export default Card;
