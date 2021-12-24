import Head from "next/head";
import { FC } from "react";

interface SEOProps {
  description: string;
  title: string;
}

const siteTitle = "rmnrss.io";
const twitter = "rmnrss";

const SEO: FC<SEOProps> = ({ description, title }) => {
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
};

export default SEO;
