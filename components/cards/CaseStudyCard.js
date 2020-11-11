import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import FlexboxColumn from "../FlexboxColumn";
import FlexboxRow from "../FlexboxRow";
import Icon from "../Icon";
import Card from "./Card";

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

function CaseStudyCard({ caseStudy }) {
  console.log(caseStudy.cover.fields.file.url);
  return (
    <Link
      passHref
      href={`/case-studies/[slug]`}
      as={`/case-studies/${caseStudy.slug}`}
    >
      <a target="_self">
        <CardContainer>
          <Image
            src={`https://${caseStudy.cover.fields.file.url}?fm=webp`}
            width={400}
            height={324}
            layout={"responsive"}
          />

          <CardContent>
            <ReadTime>{caseStudy.readTime} min read</ReadTime>
            <CardTitle>{caseStudy.title}</CardTitle>
            <CardDescription>{caseStudy.preview}</CardDescription>

            <LabelRow alignItems="center">
              <CardLabel>Read more</CardLabel>
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

CaseStudyCard.propTypes = {
  caseStudy: PropTypes.object.isRequired,
};

export default CaseStudyCard;
