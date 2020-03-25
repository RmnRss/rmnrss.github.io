import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  position: relative;
  
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 2rem;

  overflow: hidden;

  background-color: ${props =>
    props.filled ? props.backgroundColor : 'transparent'};

  border: ${props => (props.filled ? '' : '3px solid')};
  border-color: ${props => props.color};
  border-radius: 4px;

  transition: 0.4s ease;

  &:after {
    position: absolute;
    content: '';
    height: 120%;
    width: 0;
    left: -10%;
    bottom: 0%;
    background: ${props => props.hoverBackgroundColor};
    transform: skewX(15deg);
    z-index: -1;
    transition: 0.3s ease;
  }

  &:hover {
    border-color: ${props => props.hoverBackgroundColor};
    background-color: transparent;
    cursor: pointer;
  }

  &:hover:after {
    width: 120%;
  }
`;

const ButtonLinkContainer = styled(Link)`
  position: relative;
  
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 2rem;

  overflow: hidden;

  background-color: ${props =>
    props.filled ? props.backgroundColor : 'transparent'};

  border: ${props => (props.filled ? '' : '3px solid')};
  border-color: ${props => props.color};
  border-radius: 4px;

  transition: 0.4s ease;

  &:after {
    position: absolute;
    content: '';
    height: 120%;
    width: 0;
    left: -10%;
    bottom: 0%;
    background: ${props => props.hoverBackgroundColor};
    transform: skewX(15deg);
    z-index: -1;
    transition: 0.3s ease;
  }

  &:hover {
    border-color: ${props => props.hoverBackgroundColor};
    background-color: transparent;
    cursor: pointer;
  }

  &:hover:after {
    width: 120%;
  }
`;

const Label = styled.b`
  font-size: 1em;

  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.0515em;
  color: ${props => props.color};

  transition: color 0.4s ease;

  ${ButtonContainer}:hover &, ${ButtonLinkContainer}:hover & {
    color: ${props => props.hoverColor};
  }
`;

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.link && (
            <ButtonLinkContainer
              {...this.props}
              backgroundColor={this.props.backgroundColor}
              hoverBackgroundColor={this.props.hoverBackgroundColor}
              filled={this.props.filled}
              to={this.props.to}
            >
              <Label
                color={this.props.color}
                hoverColor={this.props.hoverColor}
              >
                {this.props.label}
              </Label>
            </ButtonLinkContainer>
        )}
        {!this.props.link && (
          <ButtonContainer
            {...this.props}
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={this.props.backgroundColor}
            hoverBackgroundColor={this.props.hoverBackgroundColor}
            filled={this.props.filled}
          >
            <Label color={this.props.color} hoverColor={this.props.hoverColor}>
              {this.props.label}
            </Label>
          </ButtonContainer>
        )}
      </>
    );
  }
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  label: PropTypes.string,
  link: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

Button.defaultProps = {
  color: '#000',
  hoverColor: '#e28420',
  label: 'Button',
  link: false,
};

export default Button;
