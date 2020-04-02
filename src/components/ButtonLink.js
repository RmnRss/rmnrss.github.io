import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Button from './Button';

const ButtonLink = ({
  backgroundColor,
  color,
  className,
  external,
  hoverBackgroundColor,
  hoverColor,
  label,
  to,
}) => {
  return (
    <>
      {external && (
        <a className={className} href={to}>
          <Button
            backgroundColor={backgroundColor}
            hoverColor={hoverColor}
            color={color}
            hoverBackgroundColor={hoverBackgroundColor}
            label={label}
          />
        </a>
      )}
      {!external && (
        <Link className={className} to={to}>
          <Button
            backgroundColor={backgroundColor}
            hoverColor={hoverColor}
            color={color}
            hoverBackgroundColor={hoverBackgroundColor}
            label={label}
          />
        </Link>
      )}
    </>
  );
};

ButtonLink.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  external: PropTypes.bool,
  hoverBackgroundColor: PropTypes.string,
  hoverColor: PropTypes.string,
  label: PropTypes.string,
  to: PropTypes.string,
};

ButtonLink.defaultProps = {
  backgroundColor: `#181818`,
  color: `#fafafa`,
  external: false,
  hoverBackgroundColor: `#fafafa`,
  hoverColor: `#181818`,
  label: `Button`,
};

export default ButtonLink;
