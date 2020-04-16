import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import NavigatorItem from './NavigatorItem';

const NavContainer = styled.div`
  position: fixed;
  bottom: ${props => (props.horizontal ? '0%' : '70%')};
  left: calc(((100% - 1440px)/2) - 4rem);
  display: flex;

  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
  justify-content: center;
  align-items: ${props => (props.horizontal ? 'center' : 'flex-start')};

  z-index: 999;
  counter-reset: counter;
  pointer-events: none;
`;

const Label = styled.h3`
  font-weight: 800;
  text-transform: uppercase;
  
  margin: 0 0 1rem 0;
  
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  
  letter-spacing: 0.05em;
  color: ${props => props.theme.primary};

  transition: all 0.1s ease;
`;

class Navigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavContainer
          horizontal={this.props.horizontal}
          className={this.props.className}
        >
          <Label id="navigator-label">Welcome</Label>
          {React.Children.toArray(this.props.children).map(section => (
            <NavigatorItem
              key={section.key}
              horizontal={this.props.horizontal}
              sectionID={section.props.id}
              label={section.props.className}
            />
          ))}
        </NavContainer>
        {this.props.children}
      </>
    );
  }
}

Navigator.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  horizontal: PropTypes.bool,
};

Navigator.defaultProps = {};

export default Navigator;
