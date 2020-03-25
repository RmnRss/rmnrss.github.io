import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(${props => props.nbColumns}, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

class SubSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <Content nbColumns={this.props.nbColumns}>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}

SubSection.propTypes = {
  nbColumns: PropTypes.number,
  title: PropTypes.string,
};

SubSection.defaultProps = {
  title: 'Title',
};

export default SubSection;
