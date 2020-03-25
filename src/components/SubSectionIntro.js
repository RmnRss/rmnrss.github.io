import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 1rem;
`;

const Headline = styled.h2`
  text-align: center;
`;

const Paragraph = styled.p``;

class SubSectionIntro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Headline>{this.props.title}</Headline>
        <Paragraph>{this.props.description}</Paragraph>
      </Container>
    );
  }
}

SubSectionIntro.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SubSectionIntro.defaultProps = {
  title: 'Title',
};

export default SubSectionIntro;
