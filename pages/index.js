function IndexPage() {
  return <body></body>;
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3000,
  };
}

export default IndexPage;
