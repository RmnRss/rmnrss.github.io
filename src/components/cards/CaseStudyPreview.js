import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import FlexboxColumn from "../FlexboxColumn";
import FlexboxRow from "../FlexboxRow";
import Icon from "../Icon";

const Cover = styled(Img)`
  width: 100%;
`;

const CardContainer = styled(FlexboxColumn)`
  width: 100%;
  max-width: 512px;

  color: ${(props) => props.theme.dark};
`;

const CardContent = styled(FlexboxColumn)`
  width: 100%;
  margin: 1rem 0;
`;

const CardTitle = styled.b`
  font-size: 18px;
  letter-spacing: 0.025em;
  color: inherit;
  margin: 0.5rem 0;
`;

const LabelRow = styled(FlexboxRow)`
  margin-top: auto;
`;

const CardLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  color: ${(props) => props.theme.accentGreen};
`;

const ArrowIcon = styled(Icon)`
  margin-left: 0.5rem;

  text-align: center;
  font-size: 20px !important;
  color: ${(props) => props.theme.accentGreen};
`;

function CaseStudyPreview({ fluid, slug, title, ...props }) {
  return (
    <Link to={`/case-studies/${slug}`}>
      <CardContainer {...props}>
        <Cover fluid={fluid} />
        <CardContent>
          <CardTitle>{title}</CardTitle>

          <LabelRow alignItems="center">
            <CardLabel>Read More</CardLabel>
            <ArrowIcon name={"arrow-forward"} size={16} color={"accentGreen"} />
          </LabelRow>
        </CardContent>
      </CardContainer>
    </Link>
  );
}

CaseStudyPreview.propTypes = {
  fluid: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CaseStudyPreview;
