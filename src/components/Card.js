import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;

  background-color: ${props => props.backgroundColor};

  border-radius: ${props => props.theme.borderRadius};
  border: ${props => (props.border ? '1px solid' : '')};
  border-color: ${props => props.theme.grey};

  padding: 1rem;
  margin: 1rem;

  width: ${props => props.width};
  height: ${props => props.height};

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardContainer
        border={this.props.border}
        backgroundColor={this.props.backgroundColor}
        height={this.props.height}
        width={this.props.width}
        className={this.props.className}
      >
        {this.props.children}
      </CardContainer>
    );
  }
}

Card.propTypes = {
  backgroundColor: PropTypes.string,
  border: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Card.defaultProps = {
  border: false,
  backgroundColor: 'transparent',
  height: 'auto',
};

export default Card;
