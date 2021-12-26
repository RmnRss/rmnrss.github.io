import Keyboard from "../components/Keyboard"
import ProcrastinationCube from "../components/ProcrastinationCube"
import SEO from "../components/seo"
import FullscreenLayout from "../layouts/FullscreenLayout"

function IndexPage() {
  return (
    <body>
      <SEO title="rmnrss.io" />
      <FullscreenLayout title="rmnrss.io">
        <div className="w-full h-full flex flex-col align-middle justify-start p-4">
          <h1 className="text-4xl font-bold text-lightBlue text-center mb-8">
            Hello there!
          </h1>
          <b className="text-2xl font-medium text-center  mb-8">
            Seems like this is still a work in progress...
          </b>
          <p className="text-lg text-lightBlue text-center">
            While you wait feel free to play with the procrastination cub over
            there
          </p>
          <div className="m-auto">
            <ProcrastinationCube />
          </div>
          <div className="mt-auto align-bottom">
            <Keyboard />
          </div>
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
