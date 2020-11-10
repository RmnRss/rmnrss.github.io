import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

function FlexboxColumn({
  className,
  alignItems,
  justifyContent,
  children,
  ...props
}) {
  return (
    <FlexBox
      className={className}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...props}
    >
      {children}
    </FlexBox>
  );
}

FlexboxColumn.propTypes = {
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FlexboxColumn.defaultProps = {
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

export default FlexboxColumn;
