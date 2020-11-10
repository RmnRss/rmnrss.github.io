import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import ClickableIcon from "./ClickableIcon";

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, auto);

  justify-items: center;
  align-items: center;
  text-align: center;
`;

const Icn = styled(ClickableIcon)`
  && {
    margin: 0;
  }
`;

const SocialIcons = ({ iconSize, color }) => {
  return (
    <Grid>
      <Icn
        color={color}
        size={iconSize}
        name={"skills/github"}
        href={"https://github.com/rmnrss"}
      />
      <Icn
        color={color}
        size={iconSize}
        name={"socials/linkedin"}
        href={"https://www.linkedin.com/in/rmnrss/"}
      />
      <Icn
        color={color}
        size={iconSize}
        name={"socials/email"}
        href={"mailto: romain.rousseau5@gmail.com"}
      />
    </Grid>
  );
};

SocialIcons.propTypes = {
  iconSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

SocialIcons.defaultProps = {
  color: "dark",
};

export default SocialIcons;
