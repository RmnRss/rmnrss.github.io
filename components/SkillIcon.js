import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ClickableIcon from "./ClickableIcon";
import FlexboxColumn from "./FlexboxColumn";

const Container = styled(FlexboxColumn)`
  width: 100%;

  &.wobble {
    animation: wobble 0.5s;
  }

  @keyframes wobble {
    from,
    to {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(0.9, 1.1);
    }
    50% {
      transform: scale(1.1, 0.9);
    }
    75% {
      transform: scale(0.95, 1.05);
    }
  }
`;

const TooltipHolder = styled.div`
  position: relative;

  width: 100%;
  height: ${(props) => (props.active ? 4 : 0)}px;

  margin-top: 4px;

  background-color: ${(props) => props.theme[props.color]};

  transition: height 0.2s ease;
`;

const Tooltip = styled.div`
  position: absolute;

  top: 4px;
  left: calc(${(props) => props.parentWidth / -2}px + 50%);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px 8px;

  font-size: 12px;
  font-weight: 500;

  text-align: center;

  color: ${(props) => props.theme.light};
  background-color: ${(props) => props.theme.dark};

  visibility: ${(props) => (props.active ? "visible" : "hidden")};
`;

export default function SkillIcon({ active, color, href, iconName, name }) {
  const [showTip, setShowTip] = useState(false);
  const [width, setWidth] = useState(null);
  const [wobble, setWobble] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    let timer = null;

    async function doWobble() {
      setWobble(true);
      timer = await setTimeout(function () {
        setWobble(false);
      }, 500);
    }

    setWidth(ref.current.offsetWidth);
    doWobble();

    return clearTimeout(timer);
  }, [ref, active]);

  return (
    <Container
      className={wobble ? "wobble" : ""}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <ClickableIcon
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
        name={`skills/${iconName}`}
        href={href}
        size={32}
        color={"light"}
      />
      <TooltipHolder active={active} color={color} tabIndex="-1">
        <Tooltip
          ref={ref}
          active={showTip}
          parentWidth={width}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {name}
        </Tooltip>
      </TooltipHolder>
    </Container>
  );
}

SkillIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

SkillIcon.defaultProps = {
  active: false,
  color: "dark",
};
