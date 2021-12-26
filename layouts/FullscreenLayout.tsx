import { FC } from "react"
import Header from "../components/nav/Header"
import SEO from "../components/seo"

interface FullPageLayoutProps {
  description?: string
  title: string
}

const FullscreenLayout: FC<FullPageLayoutProps> = ({
  children,
  description,
  title,
}) => {
  return (
    <>
      <SEO title={title} description={description} />
      <div className="fullscreen">
        <Header />
        <div style={{ height: "calc(100vh - 56px)" }}>{children}</div>
      </div>
    </>
  )
}

export default FullscreenLayout
