import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Button from '../components/Button';
import Section from '../components/Section';
import SEO from '../components/seo';
import CardProject from '../components/CardProject';
import SectionPortfolio from '../components/SectionPortfolio';
import theme from '../styles/main-theme';
import SectionHead from '../components/SectionHead';
import styled from 'styled-components';
import SectionAboutMe from '../components/SectionAboutMe';
import SocialIcons from '../components/SocialIcons';
import { ReactComponent as FlatMeSVG } from '../assets/svg/me-space.svg';
import LayoutVertical from '../components/LayoutVertical';

const Title = styled.h2`
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
          <div className={'Welcome'} id="head-section">
            <SectionHead>
              <SVGContainer />

              <Title>
                “ A front-end developer with the <br /> heart of a designer ”
              </Title>

              <Button
                backgroundColor={theme.dark}
                hoverBackgroundColor={theme.secondary}
                color={theme.lightDark}
                hoverColor={theme.lightDark}
                label={'Learn More'}
                onClick={() => scrollToRef(this.aboutMeRef)}
              />

              <SocialIcons
                iconSize={32}
                color={theme.lightDark}
                hoverColor={theme.secondary}
              />
            </SectionHead>
          </div>

          <div
            className={'About Me'}
            id="about-me-section"
            ref={this.aboutMeRef}
          >
            <SectionAboutMe />
          </div>

          <div className={'Portfolio'} id="portfolio-section">
            <Section backgroundColor={theme.lightDark}>
              <SectionPortfolio>
                <CardProject
                  title={'Rick & Morty Network Analysis'}
                  description={
                    'A data science network analysis of the Rick & Morty Show'
                  }
                  fluid={this.props.data.rmImg.childImageSharp.fluid}
                  sepColor={theme.primary}
                  external
                  link={'https://rmnrss.github.io/rm-social-graphs/'}
                />
                <CardProject
                  title={'TTFL'}
                  description={
                    'The TrashTalk Fantasy League is a NBA Fantasy League from\n' +
                    'the guys at trashtalk.co. I always had trouble using it on\n' +
                    'mobile, so I decided to make an application it for it.'
                  }
                  fluid={this.props.data.TTFLImg.childImageSharp.fluid}
                  sepColor={theme.primary}
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
                  sepColor={theme.primary}
                  link={'/projects/in-progress'}
                />
              </SectionPortfolio>
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
