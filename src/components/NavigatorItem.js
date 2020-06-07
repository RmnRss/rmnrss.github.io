import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FlexboxRow from './FlexboxRow';

const ItemContainer = styled(FlexboxRow)`
  position: relative;
  pointer-events: all;

  &:hover {
    cursor: pointer;
  }
`;

const Circle = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;

  background-color: ${props =>
    props.active ? props.theme.primary : props.theme.grey};
  transform: ${props => (props.active ? 'scale(1.5)' : 'scale(1)')};

  margin: 1rem;

  transition: all 0.3s ease-in-out;

  ${ItemContainer}:hover & {
    transform: scale(1.5);
    background-color: ${props => props.theme.primary};
  }
`;

function NavigatorItem(props) {
  const [active, setActive] = useState(props.active);
  const navLabel = document.getElementById('navigator-label');

  const section = document.getElementById(props.sectionID);
  const height = section.offsetHeight;
  const width = section.offsetWidth;
  const x = section.offsetLeft;
  const y = section.offsetTop;

  function scrollToSection() {
    if (props.horizontal) {
      window.scrollTo(x, 0);
    } else {
      window.scrollTo(0, y);
    }
  }

  function changeLabelDisplayed() {
    if (active) {
      navLabel.textContent = props.label;
      navLabel.className = navLabel.className.replace('is-visible', '');
      navLabel.className = [navLabel.className, 'is-visible'].join(' ');
    }
  }

  function isSectionInViewport(offset, size) {
    if (props.horizontal) {
      return window.scrollX >= offset - 10 && window.scrollX < offset + size;
    } else {
      return window.scrollY >= offset - 10 && window.scrollY < offset + size;
    }
  }

  useEffect(() => {
    function handleScroll() {
      if (props.horizontal) {
        setActive(isSectionInViewport(x, width));
      } else {
        setActive(isSectionInViewport(y, height));
      }
      changeLabelDisplayed();
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [active]);

  return (
    <ItemContainer
      justifyContent={'center'}
      alignItems={'center'}
      onClick={() => scrollToSection()}
    >
      <Circle active={active} />
    </ItemContainer>
  );
}

NavigatorItem.propTypes = {
  horizontal: PropTypes.bool,
  active: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  sectionID: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

NavigatorItem.defaultProps = {
  horizontal: false,
};

export default NavigatorItem;
