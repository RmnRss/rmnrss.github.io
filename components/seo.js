import Head from "next/head";
import PropTypes from "prop-types";

export default function SEO({ description, title }) {
  const siteTitle = "rmnrss.io";
  const twitter = "rmnrss";

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

SEO.defaultProps = {
  description: "",
  title: "",
};
