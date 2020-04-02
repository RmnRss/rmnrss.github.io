import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderItem from './HeaderItem';

const NavContainer = styled.header`
  position: fixed;
  top: 0%;

  width: 100%;
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  z-index: 999;
  
  background-color: ${props => props.theme.light};
  border-bottom: 1px solid;
  border-color: #bcbcbc;
`;

class Header extends Component {
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
            <HeaderItem
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

Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  horizontal: PropTypes.bool,
};

Header.defaultProps = {};

export default Header;
