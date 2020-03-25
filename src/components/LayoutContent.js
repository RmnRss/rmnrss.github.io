import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FlexboxColumn from './FlexboxColumn';

const Content = styled(FlexboxColumn)`
  position: relative;
  flex-grow: 1;

  margin: 0 auto;
  max-width: 1280px;
  padding: 2rem 2rem;

  z-index: 2;
`;

const LayoutContent = ({ className, children }) => {
  return (
    <Content className={className} alignItems={'stretch'} justifyContent={'flex-start'}>
      {children}
    </Content>
  );
};

LayoutContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutContent;
