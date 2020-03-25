import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import LayoutContent from './LayoutContent';

const SectionContainer = styled.div`
  position: relative;
  display: flex;

  width: ${props => props.horizontal ? '100vw' : '100%'};
  min-height: 100vh;
  padding: 0;
  background-color: ${props => props.backgroundColor};
`;

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SectionContainer  backgroundColor={this.props.backgroundColor} horizontal={this.props.horizontal}>
        {this.props.animatedBackground}
        <LayoutContent>{this.props.children}</LayoutContent>
      </SectionContainer>
    );
  }
}

Section.propTypes = {
  /* The background color of the section*/
  backgroundColor: PropTypes.string,
  /* The background of the section*/
  animatedBackground: PropTypes.node,
  /* The title of the section */
  title: PropTypes.string,

  horizontal: PropTypes.bool,
};

Section.defaultProps = {
  backgroundColor: 'transparent',
  title: '',
};

export default Section;
