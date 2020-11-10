import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import FlexboxColumn from "../FlexboxColumn";
import FlexboxRow from "../FlexboxRow";
import Icon from "../Icon";
import Card from "./Card";

const Cover = styled(Img)`
  width: 100%;
  height: 324px;
`;

const CardContent = styled(FlexboxColumn)`
  padding: 1.5rem;

  color: ${(props) => props.theme.black};
`;

const CardContainer = styled(Card)`
  width: 100%;
  height: 100%;

  max-width: 1024px;

  padding: 0;

  color: ${(props) => props.theme.dark};
  background-color: ${(props) => props.theme.light};
`;

const CardDescription = styled.p`
  color: inherit;
  margin: 0.5rem 0;
`;

const ReadTime = styled.p`
  font-family: ${(props) => props.fontFamily};
  font-size: 14px;
  line-height: 1.5;
  color: #3a3a3a;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  line-height: 1.5;
  text-overflow: ellipsis;
  word-break: break-word;
`;

const LabelRow = styled(FlexboxRow)`
  margin-top: auto;
  color: ${(props) => props.theme.accentGreen};
`;

const CardLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

const ArrowIcon = styled(Icon)`
  margin-left: 0.5rem;

  text-align: center;
  font-size: 20px;
`;

function CaseStudyCard({ slug, title, readTime, preview, fluid, ...props }) {
  return (
    <Link to={`/case-studies/${slug}`}>
      <CardContainer {...props}>
        <Cover fluid={fluid} />

        <CardContent>
          <ReadTime>{readTime} min read</ReadTime>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{preview}</CardDescription>

          <LabelRow alignItems="center">
            <CardLabel>Read more</CardLabel>
            <ArrowIcon name={"arrow-forward"} size={16} color={"accentGreen"} />
          </LabelRow>
        </CardContent>
      </CardContainer>
    </Link>
  );
}

CaseStudyCard.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  fluid: PropTypes.object.isRequired,
  readTime: PropTypes.number.isRequired,
};

export default CaseStudyCard;
