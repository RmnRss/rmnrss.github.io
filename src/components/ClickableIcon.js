import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Container = styled.a`
  transition: transform 0.3s ease-out;

  &:hover {
    transform: translateY(-10%);
    color: ${props => props.hoverColor};
  }
`;

function ClickableIcon(props) {
  return (
    <Container href={props.href} target="_blank">
      <Icon {...props} />
    </Container>
  );
}

ClickableIcon.propTypes = {
  href: PropTypes.string,
};

export default ClickableIcon;
