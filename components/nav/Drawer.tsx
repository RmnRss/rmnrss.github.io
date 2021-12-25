import Link from "next/link"
import { FC } from "react"
import ExternalLink from "../ExternalLink"
import Icon from "../Icon"
import styles from "./Drawer.module.css"

interface DrawerProps {
  open: boolean
  toggleDrawer: () => void
}

const Drawer: FC<DrawerProps> = ({ open = false, toggleDrawer }) => {
  if (open) {
    return (
      <div className="w-full h-full pos-fix p-12 flex flex-wrap align-middle justify-between bg-dark text-dark">
        <div className="flex flex-col mb-4">
          <b className="text-primary mb-4">Navigation</b>

          <Link href={"/"}>
            <a className={styles["pageLink"]} onClick={() => toggleDrawer()}>
              Home
            </a>
          </Link>

          <Link href={"/#work"}>
            <a className={styles["pageLink"]}>My Work</a>
          </Link>

          <Link href={"/about-me"}>
            <a className={styles["pageLink"]} onClick={() => toggleDrawer()}>
              About Me
            </a>
          </Link>
        </div>

        <div className="flex flex-col align-start mb-4">
          <b className="text-primary mb-4">Contact</b>

          <ExternalLink
            className={styles["exLink"]}
            href={"https://www.linkedin.com/in/rmnrss/"}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
              role="img"
              viewBox="0 0 448 512"
              height={24}
              width={24}
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
            <label className="ml-1">linkedin</label>
          </ExternalLink>

          <ExternalLink
            className={styles["exLink"]}
            href={"mailto: romain.rousseau5@gmail.com"}
          >
            <Icon name={"email"} size={24} color={"light"} />
            <label className="ml-1">romain.rousseau5@gmail.com</label>
          </ExternalLink>

          <ExternalLink
            className={styles["exLink"]}
            href={"https://github.com/rmnrss"}
          >
            <Icon name={"github"} size={24} color={"light"} />
            <label className="ml-1">github</label>
          </ExternalLink>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Drawer
