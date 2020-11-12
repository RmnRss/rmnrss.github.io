import FullPageLayout from "../components/layouts/FullPageLayout";
import HeadSection from "../components/sections/HeadSection";
import { getSingleEntry } from "../services/contentful";

function IndexPage({ owner }) {
  return (
    <FullPageLayout title="" description="">
      <HeadSection me={owner} />
    </FullPageLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      owner: await getSingleEntry("3s36kiP3mua8eAXRnWorT6"),
    },
    revalidate: 3000,
  };
}

export default IndexPage;
