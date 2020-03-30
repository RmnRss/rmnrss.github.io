import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Button from '../components/Button';
import Section from '../components/Section';
import SEO from '../components/seo';
import CardProject from '../components/CardProject';
import TopicDescription from '../components/TopicDescription';
import SubSection from '../components/SubSection';
import theme from '../styles/theme';
import SectionHead from '../components/SectionHead';
import styled from 'styled-components';
import SubSectionIntro from '../components/SubSectionIntro';
import BackgroundTitle from '../components/BackgroundTitle';
import AnimatedComponent from '../components/AnimatedComponent';
import SocialIcons from '../components/SocialIcons';
import { ReactComponent as FlatMeSVG } from '../assets/svg/me-space.svg';
import LayoutVertical from '../components/LayoutVertical';

const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.lightDark};
`;

const SVGContainer = styled(FlatMeSVG)`
  @media screen and (max-width: 1024px) {
    width: 75%;
    height: 240px;
  }
  
  @media screen and (max-width: 640px) {
    width: 75%;
    height: 180px;
  }
`;

const scrollToRef = ref => {
  window.scrollTo(0, ref.current.offsetTop);
};

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.aboutMeRef = React.createRef();
  }

  render() {
    return (
      <>
        <SEO title={`Welcome`} />
        <LayoutVertical>
          <div className={'Intro'} id="head-section">
            <SectionHead>
              <SVGContainer />

              <AnimatedComponent animationClass={'animated slideInUp'}>
                <Title>
                  “ A front-end developer with the <br /> heart of a designer ”
                </Title>
              </AnimatedComponent>

              <Button
                backgroundColor={theme.dark}
                hoverBackgroundColor={theme.primary}
                color={theme.lightDark}
                hoverColor={theme.lightDark}
                label={'Learn More'}
                onClick={() => scrollToRef(this.aboutMeRef)}
              />

              <SocialIcons
                iconSize={32}
                color={theme.lightDark}
                hoverColor={theme.primary}
              />
            </SectionHead>
          </div>

          <div
            className={'About Me'}
            id="about-me-section"
            ref={this.aboutMeRef}
          >
            <Section>
              <BackgroundTitle label={'About Me'} />
              <SubSectionIntro/>

              <SubSection nbColumns={2} title={'My interests & hobbies'}>
                <TopicDescription
                  title={'Basketball'}
                  iconLibrary={'material'}
                  iconName={'sports_basketball'}
                  description={
                    'Basketball was probably my first passion. Playing it made my learn about my thrive for competition, team-work and the importance of practice and execution in any learning process. '
                  }
                />
                <TopicDescription
                  title={'Video Games'}
                  iconLibrary={'material'}
                  iconName={'sports_esports'}
                  description={
                    'A lot of what I like about travelling and science-fiction comes together through video games. Exploration, discoveries, competition and even creation from the comfort of your home! '
                  }
                />
                <TopicDescription
                  title={'Science-Fiction'}
                  iconLibrary={'fontawesome'}
                  iconName={'fas fa-meteor'}
                  description={
                    'I love discovering new world and ideas through Sci-Fi ! When it comes, to watching, playing, reading, or even listening to Science-Fiction my towels are always ready and upgraded.'
                  }
                />
                <TopicDescription
                  title={'Traveling'}
                  iconLibrary={'material'}
                  iconName={'map'}
                  description={
                    '“Once you start travelling you can never stop”. That quote from every travel enthusiast turned out to be true for me too, I enjoy travelling and think it has open my mind over the years.'
                  }
                />
              </SubSection>
            </Section>
          </div>

          <div className={'Portfolio'} id="portfolio-section">
            <Section backgroundColor={theme.lightDark}>
              <BackgroundTitle label={'Portfolio'} color={theme.light} />

              <SubSection
                nbColumns={3}
                title={'Educational & personal projects'}
              >
                <CardProject
                  title={'Squirrel Defender'}
                  description={
                    'Squirrel Defender is a reflex-based mobile game in which you\n' +
                    'have to defend a cute squirrel from angry badgers!'
                  }
                  fluid={this.props.data.sdImg.childImageSharp.fluid}
                  sepColor={theme.secondary}
                  link={'/projects/squirrel-defender'}
                />
                <CardProject
                  title={'TTFL'}
                  description={
                    'The TrashTalk Fantasy League is a NBA Fantasy League from\n' +
                    'the guys at trashtalk.co. I always had trouble using it on\n' +
                    'mobile, so I decided to make an application it for it.'
                  }
                  fluid={this.props.data.TTFLImg.childImageSharp.fluid}
                  sepColor={theme.secondary}
                  link={'/projects/ttfl'}
                />
                <CardProject
                  title={'SIOS'}
                  description={
                    'SIOS is a web application dedicated to managing room\n' +
                    'schedules in any buildings. We developed this application\n' +
                    'for our school.'
                  }
                  fluid={this.props.data.siosImg.childImageSharp.fluid}
                  sepColor={theme.secondary}
                  link={'/projects/sios'}
                />
                <CardProject
                  title={'Munchkin Assistant'}
                  description={
                    'As big Munchkin enthusiast my friend and I always found it\n' +
                    'very challenging to keep track of all the figures in a game.\n' +
                    'So I developed a quick and practical assistant for us!'
                  }
                  fluid={this.props.data.munchkinImg.childImageSharp.fluid}
                  sepColor={theme.secondary}
                  link={'/projects/munchkin-assistant'}
                />
                <CardProject
                  title={'Rick & Morty Network Analysis'}
                  description={
                    'A data science network analysis of the Rick & Morty Show'
                  }
                  fluid={this.props.data.rmImg.childImageSharp.fluid}
                  sepColor={theme.secondary}
                  link={''}
                />
              </SubSection>
            </Section>
          </div>
        </LayoutVertical>
      </>
    );
  }
}

export const data = graphql`
  query {
    placeholder: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    rmImg: file(relativePath: { eq: "rick-and-morty.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    TTFLImg: file(relativePath: { eq: "ttfl.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    munchkinImg: file(relativePath: { eq: "munchkin.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    siosImg: file(relativePath: { eq: "sios.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sdImg: file(relativePath: { eq: "sd.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
