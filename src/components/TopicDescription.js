import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import FlexboxColumn from './FlexboxColumn';
import Card from './Card';
import FlexboxRow from './FlexboxRow';

const Container = styled.div`
  padding: 1rem 1rem 1rem 3rem;
  margin: 1rem 0;
  background-color: ${props => props.theme.light};
`;

const Title = styled.b`
  margin: 0;
`;

const Description = styled.p`
  font-size: 0.85em;
  margin: 0;
`;

const TextContainer = styled(FlexboxColumn)`
`;

const IconContainer = styled(FlexboxColumn)`
  padding: 1rem;
  margin-right: -2.5rem;
  z-index:1;
  background-color: ${props => props.theme.purpleDark};
`;

const Icon = styled.i`
  text-align: center;
  font-size: 3em !important;
  color: ${props => props.theme.light};
`;

class TopicDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <FlexboxRow justifyContent={'center'} alignItems={'center'}>
          <IconContainer justifyContent={'center'} alignItems={'center'}>
            {this.props.iconLibrary === 'material' && (
              <Icon className={'material-icons'}>{this.props.iconName}</Icon>
            )}

            {this.props.iconLibrary === 'fontawesome' && (
              <Icon className={this.props.iconName} />
            )}
          </IconContainer>
          <Container
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
          >
            <Title>{this.props.title}</Title>
            <Description>{this.props.description}</Description>
          </Container>
        </FlexboxRow>
    );
  }
}

TopicDescription.propTypes = {
  description: PropTypes.string,
  iconLibrary: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  title: PropTypes.string,
};

TopicDescription.defaultProps = {
  description: '',
  iconName: '',
  title: 'Title',
};

export default TopicDescription;
