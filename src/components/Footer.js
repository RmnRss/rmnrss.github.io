import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import FlexboxColumn from './FlexboxColumn';
import FlexboxRow from './FlexboxRow';
import SocialIcons from './SocialIcons';

const FooterContainer = styled.footer`
  position: relative;
  padding: 1rem;
  background: ${props => props.theme.light};
  border-top: 1px solid #bcbcbc;
`;

const FooterContent = styled(FlexboxRow)`
  flex-wrap: wrap;
`;

const Infos = styled.p`
  font-size: 0.75rem;
`;

function Footer(props) {
  return (
    <FooterContainer
      className={props.className}
      backgroundColor={props.backgroundColor}
    >
      <FooterContent alignItems={'center'} justifyContent={'space-evenly'}>
        <FlexboxColumn alignItems={'flex-start'}>
          <p>Romain Rousseau</p>
          <Infos>
            Site hosted on <b>Github</b>
          </Infos>
        </FlexboxColumn>

        <SocialIcons iconSize={24} color={'#181818'} />
      </FooterContent>
    </FooterContainer>
  );
}

Footer.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Footer;
