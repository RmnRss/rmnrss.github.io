import React, { Component } from 'react';
import WebFont from 'webfontloader';
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
import { ReactComponent as FlatMeSVG } from '../assets/svg/character.svg';
import LayoutVertical from '../components/LayoutVertical';

/***
 * Loading fonts
 * Poppins, FontAwesome & Material Icons
 */
WebFont.load({
  google: {
    families: ['Poppins:400,600,700', 'sans-serif', 'Material Icons'],
  },
  custom: {
    families: ['Font Awesome 5 Icons:400,900', 'Font Awesome 5 Brands:400'],
    urls: ['//use.fontawesome.com/releases/v5.12.0/css/all.css'],
  },
});

const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.lightDark};
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
        <SEO title="Portfolio - Romain Rousseau"/>

        <LayoutVertical>
          <div className={'Intro'} id="head-section">
            <SectionHead>
              <FlatMeSVG/>

              <AnimatedComponent animationClass={'animated slideInUp'}>
                <Title>
                  “ A front-end developer with the <br/> heart of a designer ”
                </Title>
              </AnimatedComponent>

              <Button
                filled
                backgroundColor={theme.lightDark}
                hoverBackgroundColor={theme.primary}
                color={theme.dark}
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
              <BackgroundTitle label={'About Me'}/>
              <SubSectionIntro
                title={'Developer & Design ?'}
                description={
                  'Let’s start with the basics. My name is Romain, I am a 24 years old student ' +
                  'following a Computer-Science engineering degree specialized in Human-Machine Interactions (HMI). ' +
                  'So I am studying computer-science, but not only, ' +
                  'I am also a very big design enthusiast. Design can mean a ' +
                  'lot of things, so what do I mean by that ? Well I find a\n' +
                  'lot of interest into multiple “aesthetic” design related\n' +
                  'fields such as Architecture, Graphic Design, Interior\n' +
                  'Design etc. About two years ago I wondered what field were\n' +
                  'mixing both computer science and design. That’s when I\n' +
                  'heard about HMI and front-end which goes from User\n' +
                  'Experience to implementing sexy animations.\n' +
                  'I\'ve tried since then to become a front-end\n' +
                  'developer by learning javascript, and it’s frameworks but\n' +
                  'also by learning about UI/UX design.'
                }
              />

              <SubSection nbColumns={4} title={'My interests & hobbies'}>
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
              <BackgroundTitle label={'Portfolio'} color={theme.light}/>

              <SubSection nbColumns={2} title={'Educational & personal projects'}>
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
