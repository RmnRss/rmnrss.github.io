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
      <Header />
      <div className="fullscreen">{children}</div>
    </>
  )
}

export default FullscreenLayout
