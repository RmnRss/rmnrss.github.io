import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import ClickableIcon from "./ClickableIcon";

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  text-align: center;
`;

const SocialIcons = ({ iconSize, color }) => {
  return (
    <Grid>
      <ClickableIcon
        color={color}
        size={iconSize}
        iconName={"fab fa-github"}
        href={"https://github.com/rmnrss"}
      />
      <ClickableIcon
        color={color}
        size={iconSize}
        iconName={"fab fa-linkedin"}
        href={"https://www.linkedin.com/in/romain-rousseau-17a23b151/"}
      />
      <ClickableIcon
        color={color}
        size={iconSize}
        iconName={"fas fa-envelope"}
        href={"mailto: romain.rousseau5@gmail.com"}
      />
    </Grid>
  );
};

SocialIcons.propTypes = {
  iconSize: PropTypes.number.isRequired,
};

export default SocialIcons;
