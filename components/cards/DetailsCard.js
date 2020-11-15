import { motion, useIsPresent } from "framer-motion";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Breakpoints from "../../utils/breakpoints";
import Button from "../Button";
import Icon from "../Icon";

const cardVariants = {
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { ease: "easeOut" },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { ease: "easeOut" },
    },
  },
};

const Card = styled(motion.div)`
  position: absolute;
  z-index: 1;

  top: 4rem;
  bottom: 4rem;
  right: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  overflow: hidden;

  height: min-content;
  width: 400px;

  padding: 2rem;

  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.lightBlue};

  @media screen and (max-width: ${Breakpoints.md}px) {
    position: relative;
    top: 0;
    bottom: 0;
    right: 0;

    width: 100%;
  }
`;

const CardDescription = styled(motion.p)`
  color: inherit;
  margin: 1rem 0 2rem 0;
`;

const ReadTime = styled(motion.p)`
  font-family: ${(props) => props.fontFamily};
  font-size: 14px;
  line-height: 1.5;
  color: #3a3a3a;
`;

const CardTitle = styled(motion.h3)`
  font-size: 20px;
  line-height: 1.5;
  text-overflow: ellipsis;
  word-break: break-word;
`;

const ArrowIcon = styled(Icon)`
  margin-left: 0.5rem;

  text-align: center;
  font-size: 20px;
`;

const ReadButton = styled(Button)`
  width: fit-content;
`;

export default function DetailsCard({ preview, readTime, slug, title }) {
  const isPresent = useIsPresent();

  return (
    <Card
      variants={cardVariants}
      initial="hidden"
      animate={isPresent ? "visible" : "hidden"}
    >
      <CardTitle variants={itemVariants}>{title}</CardTitle>
      <ReadTime variants={itemVariants}>{readTime} min read</ReadTime>

      <CardDescription variants={itemVariants}>{preview}</CardDescription>

      <motion.div variants={itemVariants}>
        <Link href={`/case-studies/[slug]`} as={`/case-studies/${slug}`}>
          <ReadButton color={"accentGreen"}>
            Read more
            <ArrowIcon name={"arrow-forward"} size={18} color={"light"} />
          </ReadButton>
        </Link>
      </motion.div>
    </Card>
  );
}

DetailsCard.propTypes = {
  preview: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
