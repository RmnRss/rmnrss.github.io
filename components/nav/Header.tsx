import Link from "next/link"
import { FC, useState } from "react"
import Icon from "../Icon"
import Drawer from "./Drawer"

const Header: FC = () => {
  const [showDrawer, setShowDrawer] = useState(false)

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer)
  }

  const closeDrawer = () => {
    setShowDrawer(false)
  }

  return (
    <>
      <header className="w-full p-4 flex justify-center align-middle">
        <nav className="w-full flex align-middle justify-between px-1 max-w-7xl">
          <Link passHref href={"/"}>
            <a className="pr" target="_self" onClick={() => closeDrawer()}>
              rmnrss.io
            </a>
          </Link>

          <div className="p-0.5 bg-white">
            <Icon
              name={showDrawer ? "close" : "menu"}
              size={24}
              color={"dark"}
              onClick={() => toggleDrawer()}
            />
          </div>
        </nav>
      </header>

      <Drawer open={showDrawer} toggleDrawer={closeDrawer} />
    </>
  )
}

export default Header
