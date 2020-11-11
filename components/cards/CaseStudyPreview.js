import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import FlexboxColumn from "../FlexboxColumn";
import FlexboxRow from "../FlexboxRow";
import Icon from "../Icon";

const CardContainer = styled(FlexboxColumn)`
  width: 100%;
  max-width: 512px;

  color: ${(props) => props.theme.dark};
`;

const CardContent = styled(FlexboxColumn)`
  width: 100%;
  height: 100%;
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

function CaseStudyPreview({ caseStudy }) {
  return (
    <Link
      passHref
      href={`/case-studies/[slug]`}
      as={`/case-studies/${caseStudy.slug}`}
    >
      <a target="_self">
        <CardContainer>
          <Image
            src={`https://${caseStudy.cover.fields.file.url}?fm=webp&fit=fill`}
            width={512}
            height={320}
            layout={"intrinsic"}
          />
          <CardContent>
            <CardTitle>{caseStudy.title}</CardTitle>

            <LabelRow alignItems="center">
              <CardLabel>Read More</CardLabel>
              <ArrowIcon
                name={"arrow-forward"}
                size={16}
                color={"accentGreen"}
              />
            </LabelRow>
          </CardContent>
        </CardContainer>
      </a>
    </Link>
  );
}

CaseStudyPreview.propTypes = {
  caseStudy: PropTypes.object.isRequired,
};

export default CaseStudyPreview;
