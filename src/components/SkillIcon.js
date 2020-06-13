import PropTypes from "prop-types";
import React from "react";
import ClickableIcon from "./ClickableIcon";

export default function SkillIcon(props) {
  return (
    <ClickableIcon
      iconName={props.className}
      href={props.href}
      size={32}
      color={"#7B6BC6"}
    />
  );
}

SkillIcon.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
};
