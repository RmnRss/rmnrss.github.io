import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import NavigatorItem from './NavigatorItem';
import Button from './Button';

const NavContainer = styled.div`
  position: fixed;

  width: ${props => (props.horizontal ? 'calc(50% - 4rem)' : '')};
  height: ${props => (props.horizontal ? '' : 'calc(100% - 8rem)')};

  padding: ${props => (props.horizontal ? '0 2rem' : '4rem 0')};

  bottom: ${props => (props.horizontal ? '0%' : '')};
  left: ${props =>
    props.horizontal ? '' : 'calc(((100% - 1440px) / 2) - 4rem)'};

  display: flex;
  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
  justify-content: ${props => (props.horizontal ? 'flex-start' : 'flex-start')};
  align-items: center;

  z-index: 999;
`;

const Label = styled.h3`
  font-weight: 800;
  text-transform: ${props => (props.horizontal ? 'capitalize' : 'uppercase')};

  margin: ${props => (props.horizontal ? '0 0 0 1rem' : '0 0 1rem 0')};

  writing-mode: ${props => (props.horizontal ? '' : 'vertical-lr')};

  letter-spacing: 0.05em;
  color: ${props => props.theme.primary};

  transform: ${props => (props.horizontal ? '' : 'rotate(180deg)')};

  opacity: 0;
  transition: opacity 0.3s ease-out;

  &.is-visible {
    opacity: 1;
  }
`;

const NextButton = styled(Button)`
  && {
    margin-left: auto;
  }
`;

class Navigator extends Component {
  constructor(props) {
    super(props);
  }

  scrollToNext(current, allPos) {
    let next;

    for (let pos of allPos) {
      if (pos > current) {
        next = pos;
        window.scrollTo(next, 0);
        break;
      }
    }
  }

  render() {
    const sections = React.Children.toArray(this.props.children);
    const allPos = [];

    sections.map(section => {
      let offset = document.getElementById(section.props.id).offsetLeft;
      allPos.push(offset);
    });

    return (
      <>
        <NavContainer
          horizontal={this.props.horizontal}
          className={this.props.className}
        >
          {!this.props.horizontal && (
            <Label id="navigator-label" horizontal={this.props.horizontal} />
          )}

          {sections.map(section => (
            <NavigatorItem
              key={section.key}
              horizontal={this.props.horizontal}
              sectionID={section.props.id}
              label={section.props.className}
            />
          ))}

          {this.props.horizontal && (
            <>
              <Label id="navigator-label" horizontal={this.props.horizontal} />

              <NextButton
                label={'Next'}
                hoverColor={'#F3F3F3'}
                hoverBackgroundColor={'#006BB6'}
                onClick={() => this.scrollToNext(window.scrollX, allPos)}
              />
            </>
          )}
        </NavContainer>
        {this.props.children}
      </>
    );
  }
}

Navigator.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  horizontal: PropTypes.bool,
};

Navigator.defaultProps = {};

export default Navigator;
