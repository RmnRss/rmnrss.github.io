import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import FlexboxRow from "../FlexboxRow";

const ItemContainer = styled(FlexboxRow)`
  position: relative;
  pointer-events: all;
  margin: 0 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const Label = styled.p`
  font-weight: 600;
  color: ${props => props.theme.dark};

  transition: all 0.1s ease;

  &:after {
    background-color: #181818;
    content: "";
    display: block;
    height: 2px;
    opacity: ${props => (props.active ? 1 : 0.35)};
    transform-origin: ${props => (props.active ? "0 0" : "100% 0")};
    transform: ${props => (props.active ? "scaleX(1)" : "scaleX(0)")};
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  ${ItemContainer}:hover &:after {
    opacity: 1;
    transform-origin: 0 0;
    transform: scaleX(1);
  }
`;

class HeaderItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    this.setState({ active: false });
    this.linkedSection = document.getElementById(this.props.sectionID);
    window.addEventListener("scroll", this.handleScroll, true);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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
        justifyContent={"flex-end"}
        alignItems={"center"}
        onClick={() => this.scrollToOffset()}
      >
        <Label active={this.state.active}>{this.props.label}</Label>
      </ItemContainer>
    );
  }
}

HeaderItem.propTypes = {
  horizontal: PropTypes.bool,
  label: PropTypes.string,
  sectionID: PropTypes.string,
  onClick: PropTypes.func,
};

HeaderItem.defaultProps = {
  label: "Link",
  active: false,
};

export default HeaderItem;