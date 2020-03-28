import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { ReactComponent as FlatMeSVG } from '../assets/svg/me-portrait.svg';
import FlexboxColumn from './FlexboxColumn';
import FlexboxRow from './FlexboxRow';

const Container = styled(FlexboxColumn)`
  padding: 1rem;
`;

const CardsContainer = styled(FlexboxRow)`
  padding: 1rem;
`;

const SectionTitleContainer = styled(FlexboxRow)`
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const LeftCard = styled(Card)`
  && {
    padding: 0.5rem;
    margin-right: -0.5rem;
  }
`;

const CenterCard = styled(Card)`
  && {
    padding: 0.5rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightCard = styled(Card)`
  && {
    padding: 0.5rem;
    margin-left: -0.5rem;
    z-index: -2;
  }
`;

const Text = styled.p`
  color: ${props => props.theme.light};
  margin: 0;
`;

const TextItalic = styled(Text)`
  font-size: 0.75rem;
  font-style: italic;
  margin: 0.5rem 0;
`;

const SectionTitleBlue = styled.b`
  color: ${props => props.theme.primary};
  margin: 0 0.5rem 0 0.5rem;
`;

const Icon = styled.i`
  color: ${props => props.theme.primary};
  font-size: 2rem;
  margin: 0.5rem;
`;

const SectionTitleWhite = styled.b`
  color: ${props => props.theme.light};
  margin: 0 0.5rem 0 0.5rem;
`;

const Name = styled.h2`
  color: ${props => props.theme.primary};
  font-size: 2rem;
`;

const SVG = styled(FlatMeSVG)`
  width: 224px;
  height: 224px;
`;

class SubSectionIntro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlexboxColumn justifyContent={'center'} alignItems={'center'}>
        <CardsContainer justifyContent={'center'} alignItems={'center'}>
          <LeftCard backgroundColor={'#001A20'}>
            <FlexboxColumn>
              <Container>
                <SectionTitleContainer
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                >
                  <i className={'material-icons'}>person</i>
                  <SectionTitleBlue>Information</SectionTitleBlue>
                </SectionTitleContainer>
                <Text>24 years old</Text>
                <Text>Student</Text>
              </Container>
              <Container>
                <SectionTitleContainer
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                >
                  <i className={'material-icons'}>school</i>
                  <SectionTitleBlue>Education</SectionTitleBlue>
                </SectionTitleContainer>
                <Text>Computer Science Engineering</Text>
                <Text>Human-Machine Interactions</Text>
                <Text>UI/UX Design</Text>
              </Container>
            </FlexboxColumn>
          </LeftCard>
          <CenterCard
            width={'320px'}
            height={'512px'}
            backgroundColor={'#003541'}
          >
            <Container alignItems={'center'} justifyContent={'center'}>
              <SVG/>
              <Name>Romain</Name>
              <TextItalic>not an astronaut :(</TextItalic>
            </Container>
          </CenterCard>
          <RightCard backgroundColor={'#001A20'}>
            <Container>
              <SectionTitleWhite>Web & Mobile Development</SectionTitleWhite>
              <FlexboxRow>
                <Icon className={'fab fa-js'}/>
                <Icon className={'fab fa-angular'}/>
                <Icon className={'fab fa-react'}/>
                <Icon className={'fab fa-android'}/>
                <Icon className={'fab fa-bootstrap'}/>
              </FlexboxRow>
            </Container>
            <Container>
              <SectionTitleWhite>UI/UX Design</SectionTitleWhite>
              <FlexboxRow>
                <Icon className={'fab fa-figma'}/>
              </FlexboxRow>
            </Container>
            <Container>
              <SectionTitleWhite>IT Projects Management</SectionTitleWhite>
              <FlexboxRow>
                <Icon className={'fab fa-git-alt'}/>
                <Icon className={'fab fa-gitkraken'}/>
                <Icon className={'fab fa-node-js'}/>
                <Icon className={'fab fa-npm'}/>
              </FlexboxRow>
            </Container>
            <Container>
              <SectionTitleWhite>Programming Languages</SectionTitleWhite>
              <FlexboxRow>
                <Icon className={'fab fa-java'}/>
                <Icon className={'fab fa-python'}/>
              </FlexboxRow>
            </Container>
          </RightCard>
        </CardsContainer>
      </FlexboxColumn>
    );
  }
}

SubSectionIntro.propTypes = {};

SubSectionIntro.defaultProps = {};

export default SubSectionIntro;
