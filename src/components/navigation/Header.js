import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import HeaderItem from './HeaderItem';

const Container = styled.header`
  position: fixed;
  top: 0%;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 1rem;

  width: 100%;

  justify-content: ${props => (props.horizontal ? 'flex-start' : 'center')};
  margin-left: ${props => (props.horizontal ? '2rem' : '')};

  z-index: 999;

  background-color: ${props =>
    props.horizontal ? 'transparent' : props.theme.light};
  border-bottom: ${props => (props.horizontal ? '' : '1px solid')};
  border-color: ${props => (props.horizontal ? '' : '#bcbcbc')};
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function Header(props) {
  return (
    <>
      <Container horizontal={props.horizontal} className={props.className}>
        <Nav>
          {React.Children.toArray(props.children).map(section => (
            <HeaderItem
              key={section.key}
              horizontal={props.horizontal}
              sectionID={section.props.id}
              label={section.props.className}
            />
          ))}
        </Nav>
      </Container>
      {props.children}
    </>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  horizontal: PropTypes.bool,
};

Header.defaultProps = {
  horizontal: false,
};

export default Header;
