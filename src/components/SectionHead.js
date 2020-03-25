import React, { Component } from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import particlesConfig from '../assets/particles';
import Section from './Section';
import FlexboxColumn from './FlexboxColumn';

const ContentCenter = styled(FlexboxColumn)`
  margin: auto;
  z-index: 0;
`;

const BackgroundParticles = styled(Particles)`
  position: absolute;
  background: linear-gradient(to bottom, #312952 0%, #5a4a94 35%, #7b6bc6 100%);
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

class SectionHead extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section
        animatedBackground={<BackgroundParticles params={particlesConfig} />}
      >
        <ContentCenter justifyContent={'center'} alignItems={'center'}>
          {this.props.children}
        </ContentCenter>
      </Section>
    );
  }
}

SectionHead.propTypes = {};

SectionHead.defaultProps = {};

export default SectionHead;
