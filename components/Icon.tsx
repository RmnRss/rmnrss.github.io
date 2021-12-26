import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { Color } from "../styles/theme"

interface IconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string
  size?: number
  color?: Color
}

const Icon: FC<IconProps> = ({ size, color, className, name, ...props }) => {
  return (
    <span
      className={`material-icons-round w-${size} h-${size} text-${color} fill-${color} ${className}`}
      {...props}
    >
      {name}
    </span>
  )
}

export default Icon
