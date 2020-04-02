import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import Button from './Button';
import BackgroundImage from 'gatsby-background-image';
import ButtonLink from './ButtonLink';

const Rectangle = styled.div`
  display: block;
  height: 3px;
  width: 4rem;
  background-color: ${props => props.sepColor};
  margin-bottom: 1em;
`;

const BgImg = styled(BackgroundImage)`
  && {
    position: absolute !important;
    top: 0;
    left: 0;
  }

  width: fill-available;
  height: inherit;
  background-position: top;

  transition: all 0.8s ease-out;
`;

const CardContent = styled.div`
  padding: 1rem;

  height: fill-available;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  transform: translateY(90%);

  transition: all 0.8s cubic-bezier(0.44, 0.01, 0, 1);

  color: ${props => props.theme.light};
`;

const CardButton = styled(ButtonLink)`
  && {
    margin-top: auto;
  }
`;

const CardContainer = styled(Card)`
  padding: 0rem;

  &:hover ${CardContent} {
    transform: translateY(0%);
  }

  &:hover ${BgImg} {
    filter: brightness(0.2);
    transform: scale(1.15);
  }
`;

const CardDescription = styled.p`
  color: inherit;
  margin: 0;
`;

const CardTitle = styled.h4`
  letter-spacing: 0.025em;
  color: inherit;
  margin: 0.5rem 0;
`;

class CardProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      borderColor: this.props.borderColor,
    };
  }

  render() {
    return (
      <CardContainer
        {...this.props}
        backgroundColor={this.props.backgroundColor}
        width={'auto'}
        height={'24rem'}
      >
        <BgImg fluid={this.props.fluid}></BgImg>
        <CardContent color={this.props.color}>
          <Rectangle sepColor={this.props.sepColor} />
          <CardTitle>{this.props.title}</CardTitle>
          <CardDescription>{this.props.description}</CardDescription>
          <CardButton
            to={this.props.link}
            external={this.props.external}
            backgroundColor={'#22CAAC'}
            hoverBackgroundColor={'#FAFAFA'}
            color={'#FAFAFA'}
            hoverColor={'#22CAAC'}
            label={'Learn More'}
          />
        </CardContent>
      </CardContainer>
    );
  }
}

CardProject.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string,
  external: PropTypes.bool,
  fluid: PropTypes.object,
  height: PropTypes.string,
  link: PropTypes.string,
  sepColor: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
};

CardProject.defaultProps = {
  description: 'Card description',
  height: 'auto',
  link: '#',
  title: 'Card Title',
  sepColor: '#181818',
};

export default CardProject;
