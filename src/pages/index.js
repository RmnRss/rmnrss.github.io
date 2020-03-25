import React, { Component } from 'react';
import WebFont from 'webfontloader';
import { graphql } from 'gatsby';
import Button from '../components/Button';
import Section from '../components/section';
import SEO from '../components/seo';
import ProjectCard from '../components/ProjectCard';
import TopicDescription from '../components/TopicDescription';
import SubSection from '../components/SubSection';
import ClickableIcon from '../components/ClickableIcon';
import Footer from '../components/footer';
import theme from '../styles/theme';
import HeadSection from '../components/HeadSection';
import styled from 'styled-components';
import IntroSubSection from '../components/IntroSubSection';
import Body from '../components/Body';
import BackgroundTitle from '../components/BackgroundTitle';
import Navigator from '../components/navigator';
import AnimatedComponent from '../components/AnimatedComponent';
import FlexboxRow from '../components/FlexboxRow';
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
  console.log('fdqsssss');
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
        <SEO title="Portfolio - Romain Rousseau" />

        <LayoutVertical>
          <div className={'Intro'} id="head-section">
            <HeadSection>
              <FlatMeSVG />

              <AnimatedComponent animationClass={'animated slideInUp'}>
                <Title>
                  “ A front-end developer with the <br /> heart of a designer ”
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
            </HeadSection>
          </div>

          <div
            className={'About Me'}
            id="about-me-section"
            ref={this.aboutMeRef}
          >
            <Section>
              <BackgroundTitle label={'About Me'} />
              <IntroSubSection
                title={'Developer & Design ?'}
                description={
                  'Let’s start with the basics. My name is Romain (very French\n' +
                  'I know...). I am a 24 years old student in computer science,\n' +
                  'following an engineering degree specialized in Human-Machine\n' +
                  'Interactions (HMI).\n' +
                  'Professionally, I like to see my self as a computer-science\n' +
                  'engineer with a big love for design. Design can mean a\n' +
                  'loooot of things, so what do I mean by that ? Well I find a\n' +
                  'lot of interest into multiple “aestetic” design related\n' +
                  'fields such as Architechture, Graphic Design, Interior\n' +
                  'Design etc. About two years ago I wondered what field were\n' +
                  'mxing both computer science and design. That’s when I\n' +
                  'learned about HMI and front-end which goes from User\n' +
                  'Experience to implementing sexy, but often useless,\n' +
                  'animations. I tried since then to become a front-end\n' +
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
              <BackgroundTitle label={'Portfolio'} color={theme.light} />

              <IntroSubSection
                description={
                  'Learning about design I have read a lot about whether or not designers should learn programming. ' +
                  'But what about the other way around ? I think an argument could be made about programmers having to learn about design. ' +
                  'In IT we often found great software, or ideas, that are hardly usable because they' +
                  'have not been thought for their users or simply have not been designed before there were implemented.' +
                  'This is the main reason why I’ve tried to mix programming and designing through all the project presented below' +
                  'I think it made me a better developer and gave me great insights for IT projects.'
                }
                title={'Educational & personal work'}
              />

              <SubSection nbColumns={4} title={'Projects'}>
                <ProjectCard
                  title={'Squirrel Defender'}
                  description={
                    'Squirrel Defender is a reflex-based mobile game in which you\n' +
                    'have to defend a cute squirrel from angry badgers!'
                  }
                  fluid={this.props.data.sdImg.childImageSharp.fluid}
                  sepColor={theme.secondary}
                  color={theme.secondary}
                  link={'/projects/squirrel-defender'}
                />
                <ProjectCard
                  title={'TTFL'}
                  description={
                    'The TrashTalk Fantasy League is a NBA Fantasy League from\n' +
                    'the guys at trashtalk.co. I always had trouble using it on\n' +
                    'mobile, so I decided to make an application it for it.'
                  }
                  fluid={this.props.data.TTFLImg.childImageSharp.fluid}
                  sepColor={theme.secondary}
                  color={theme.secondary}
                />
                <ProjectCard
                  title={'SIOS'}
                  description={
                    'SIOS is a web application dedicated to managing room\n' +
                    'schedules in any buildings. We developed this application\n' +
                    'for our school.'
                  }
                  fluid={this.props.data.siosImg.childImageSharp.fluid}
                  sepColor={theme.secondary}
                  color={theme.secondary}
                />
                <ProjectCard
                  title={'Munchkin Assistant'}
                  description={
                    'As big Munchkin enthusiast my friend and I always found it\n' +
                    'very challenging to keep track of all the figures in a game.\n' +
                    'So I developed a quick and practical assistant for us!'
                  }
                  fluid={this.props.data.munchkinImg.childImageSharp.fluid}
                  sepColor={theme.secondary}
                />
                <ProjectCard
                  title={'Rick & Morty Network Analysis'}
                  description={
                    'A data science network analysis of the Rick & Morty Show'
                  }
                  fluid={this.props.data.rmImg.childImageSharp.fluid}
                  sepColor={theme.secondary}
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