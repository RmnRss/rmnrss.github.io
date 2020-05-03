import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import FlexboxColumn from './FlexboxColumn';
import SectionTitle from './SectionTitle';
import Separator from './Separator';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  margin: auto 0;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled(FlexboxColumn)``;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

class SectionPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Title alignItems={'stretch'} justifyContent={'center'}>
          <SectionTitle color={'#FFD875'}>Educational</SectionTitle>
          <SectionTitle color={'#FEBE81'}>& Personal</SectionTitle>
          <SectionTitle color={'#EFA45D'}>Projects</SectionTitle>
          <Separator
            color={'#22CAAC'}
            margin={'2rem 0 1rem 0'}
            width={'3rem'}
          />
        </Title>
        <CardGrid nbColumns={this.props.nbColumns}>
          {this.props.children}
        </CardGrid>
      </Grid>
    );
  }
}

SectionPortfolio.propTypes = {
  nbColumns: PropTypes.number,
  title: PropTypes.string,
};

SectionPortfolio.defaultProps = {
  title: 'Title',
};

export default SectionPortfolio;
