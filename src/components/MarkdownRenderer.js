import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PropTypes from "prop-types";
import React from "react";

export default function MarkdownRenderer({ document }) {
  return <>{documentToReactComponents(document.json)}</>;
}

MarkdownRenderer.propTypes = {
  document: PropTypes.object.isRequired,
};
