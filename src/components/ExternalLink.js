import PropTypes from "prop-types";
import React from "react";

export default function ExternalLink({
  children,
  href,
  rel,
  target,
  ...props
}) {
  return (
    <a target={target} rel={rel} href={href} {...props}>
      {children}
    </a>
  );
}

ExternalLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
  rel: PropTypes.string,
  target: PropTypes.string,
};

ExternalLink.defaultProps = {
  rel: "noreferrer noopener",
  target: "_blank",
};
