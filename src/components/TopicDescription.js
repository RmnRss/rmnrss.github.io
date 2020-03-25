import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import FlexboxColumn from './FlexboxColumn';

const Container = styled(FlexboxColumn)`
  padding: 1rem;
`;

const Title = styled.h4`
  text-transform: capitalize;
  text-align: center;
`;

const Description = styled.p`
  margin: 0;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 6em;
  height: 6em;
  background-color: ${props => props.theme.primary};
  border-radius: 50%;
`;

const Icon = styled.i`
  text-align: center;
  font-size: 3.5em !important;
  color: ${props => props.theme.light};
`;

class TopicDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container alignItems={'center'} justifyContent={'flex-start'}>
        <IconContainer>
          {this.props.iconLibrary === 'material' && (
            <Icon className={'material-icons'}>
              {this.props.iconName}
            </Icon>
          )}

          {this.props.iconLibrary === 'fontawesome' && (
            <Icon className={this.props.iconName} />
          )}
        </IconContainer>
          <Title>{this.props.title}</Title>
          <Description>{this.props.description}</Description>
      </Container>
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
