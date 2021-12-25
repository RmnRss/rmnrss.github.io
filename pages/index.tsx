function IndexPage() {
  return (
    <body>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </body>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3000,
  };
}

export default IndexPage;
