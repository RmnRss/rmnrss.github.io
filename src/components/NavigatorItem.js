import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import FlexboxRow from './FlexboxRow';

const ItemContainer = styled(FlexboxRow)`
  pointer-events: all;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    margin: 0 1rem;
  }
`;

const Circle = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;

  background-color: ${props =>
    props.active ? props.theme.primary : props.theme.grey};
  transform: ${props => (props.active ? 'scale(1.5)' : 'scale(1)')};

  margin: 0.5rem 2rem 0.5rem 0.5rem;

  transition: all 0.3s ease-in-out;

  ${ItemContainer}:hover & {
    transform: scale(1.5);
    background-color: ${props => props.theme.primary};
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Label = styled.p`
  opacity: 0;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: ${props => props.theme.primary};

  transition: all 0.4s ease;

  ${ItemContainer}:hover & {
    opacity: 1;
  }

  @media screen and (max-width: 1024px) {
    opacity: 1;
    color: ${props => (props.active ? props.theme.primary : props.theme.dark)};

    ${ItemContainer}:hover & {
      color: ${props => props.theme.primary};
    }
  }
`;

class NavigatorItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    this.setState({ active: false });
    this.linkedSection = document.getElementById(this.props.sectionID);
    window.addEventListener('scroll', this.handleScroll, true);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.props.horizontal) {
      this.isActive(
        this.linkedSection.offsetLeft,
        this.linkedSection.offsetWidth
      );
    } else {
      this.isActive(
        this.linkedSection.offsetTop,
        this.linkedSection.offsetHeight
      );
    }
  };

  scrollToOffset() {
    if (this.props.horizontal) {
      window.scrollTo(this.linkedSection.offsetLeft, 0);
    } else {
      window.scrollTo(0, this.linkedSection.offsetTop);
    }
  }

  isActive(offset, size) {
    if (this.props.horizontal) {
      this.setState({
        active: window.scrollX >= offset && window.scrollX < offset + size,
      });
    } else {
      this.setState({
        active: window.scrollY >= offset && window.scrollY < offset + size,
      });
    }
  }

  render() {
    return (
      <ItemContainer
        justifyContent={'flex-end'}
        alignItems={'center'}
        onClick={() => this.scrollToOffset()}
      >
        <Label active={this.state.active}>{this.props.label}</Label>
        <Circle active={this.state.active} />
      </ItemContainer>
    );
  }
}

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
