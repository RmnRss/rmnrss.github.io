import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme[props.color]};
  fill: ${(props) => props.theme[props.color]};

  svg {
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
  }

  transition: color 0.3s ease-out;
`;

const Icon = ({ size, color, className, name, ...props }) => {
  let [icon, setIcon] = useState(null);

  useEffect(() => {
    async function importIcon() {
      let Icon = null;
      try {
        Icon = (await import(`../assets/icons/${name}.svg`)).default;
      } catch (err) {
        console.log(err);
      }
      setIcon(<Icon />);
    }

    importIcon();
  }, [name]);

  return (
    <Container size={size} color={color} className={className} {...props}>
      {icon}
    </Container>
  );
};

Icon.defaultProps = {
  color: "light",
  name: "placeholder",
  size: 24,
};

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default Icon;
