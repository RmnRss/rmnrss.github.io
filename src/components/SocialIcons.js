import React from 'react';
import PropTypes from 'prop-types';
import FlexboxRow from './FlexboxRow';
import ClickableIcon from './ClickableIcon';

const SocialIcons = ({ iconSize, color }) => {
  return (
    <FlexboxRow>
      <ClickableIcon
        color={color}
        size={iconSize}
        iconName={'fab fa-github'}
        href={'https://github.com/rmnrss'}
      />
      <ClickableIcon
        color={color}
        size={iconSize}
        iconName={'fab fa-linkedin'}
        href={'https://www.linkedin.com/in/romain-rousseau-17a23b151/'}
      />
      <ClickableIcon
        color={color}
        size={iconSize}
        iconName={'fas fa-envelope'}
        href={'mailto: romain.rousseau5@gmail.com'}
      />
    </FlexboxRow>
  );
};

SocialIcons.propTypes = {
  iconSize: PropTypes.number.isRequired,
};

export default SocialIcons;
