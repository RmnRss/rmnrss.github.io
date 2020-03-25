import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SocialIcons from './SocialIcons';
import FlexboxRow from './FlexboxRow';
import FlexboxColumn from './FlexboxColumn';

const FooterContainer = styled.footer`
  position: relative;
  background: ${props => props.theme.light};
  border-top: 1px solid #bcbcbc;
`;

const FooterContent = styled(FlexboxRow)`
  flex-grow: 1;
  flex-wrap: wrap;
`;

const SiteInfos = styled(FlexboxColumn)`
  flex-wrap: wrap;
  align-content: center;

  margin: 0.75rem;
`;

const Infos = styled.p`
  font-size: 0.75rem;
  margin: 0 0.5rem 0 0;
  padding-left: 1rem;
`;

const Author = styled.p`
  margin: 0;
  padding-left: 1rem;
`;

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FooterContainer
        className={this.props.className}
        backgroundColor={this.props.backgroundColor}
      >
          <FooterContent alignItems={'center'} justifyContent={'space-evenly'}>
            <SiteInfos alignItems={'flex-start'}>
              <Author>Romain Rousseau</Author>
              <Infos>
                Site hosted on <b>Github</b>
              </Infos>
            </SiteInfos>

            <SocialIcons
              iconSize={24}
              color={'#181818'}
              hoverColor={'#e28420'}
            />
          </FooterContent>
      </FooterContainer>
    );
  }
}

Footer.propTypes = {
  backgroundColor: PropTypes.string,
};

Footer.defaultProps = {
  backgroundColor: 'transparent',
};

export default Footer;
