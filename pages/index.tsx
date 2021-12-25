import SEO from "../components/seo"
import FullscreenLayout from "../layouts/FullscreenLayout"

function IndexPage() {
  return (
    <body>
      <SEO title="rmnrss.io" />
      <FullscreenLayout title="rmnrss.io">
        <div className="w-full h-full flex flex-col align-middle justify-start p-4">
          <h1 className="text-2xl font-bold text-center">Hello there!</h1>
        </div>
      </FullscreenLayout>
    </body>
  )
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3000,
  }
}

export default IndexPage
