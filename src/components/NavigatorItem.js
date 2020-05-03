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

const NavigatorItem = ({ horizontal, label, sectionID }) => {
  const [active, setActive] = useState(false);
  const navLabel = document.getElementById('navigator-label');

  const height = document.getElementById(sectionID).offsetHeight;
  const width = document.getElementById(sectionID).offsetWidth;
  const x = document.getElementById(sectionID).offsetLeft;
  const y = document.getElementById(sectionID).offsetTop;

  function scrollToSection() {
    if (horizontal) {
      window.scrollTo(x, 0);
    } else {
      window.scrollTo(0, y);
    }
  }

  function changeLabelDisplayed() {
    if (active) {
      navLabel.textContent = label;
      navLabel.className = navLabel.className.replace('is-visible', '');
      navLabel.className = [navLabel.className, 'is-visible'].join(' ');
    }
  }

  function isSectionInViewport(offset, size) {
    if (horizontal) {
      return window.scrollX >= offset - 10 && window.scrollX < offset + size;
    } else {
      return window.scrollY >= offset - 10 && window.scrollY < offset + size;
    }
  }

  useEffect(() => {
    function handleScroll() {
      if (horizontal) {
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
};

NavigatorItem.propTypes = {
  horizontal: PropTypes.bool,
  label: PropTypes.string,
  sectionID: PropTypes.string,
  onClick: PropTypes.func,
};

NavigatorItem.defaultProps = {
  label: 'Link',
  active: false,
};

export default NavigatorItem;
