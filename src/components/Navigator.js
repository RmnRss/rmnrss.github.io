import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import NavigatorItem from './NavigatorItem';

const NavContainer = styled.div`
  position: fixed;
  bottom: ${props => (props.horizontal ? '0%' : '50%')};
  width: 100%;
  display: flex;

  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
  justify-content: center;
  align-items: ${props => (props.horizontal ? 'center' : 'flex-end')};

  z-index: 999;
  counter-reset: counter;
  pointer-events: none;
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
