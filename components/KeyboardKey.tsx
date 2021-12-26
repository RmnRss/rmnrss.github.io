import { FC } from "react"
import theme, { Color } from "../styles/theme"

interface KeyboardKeyProps {
  width?: number
  height?: number
  rotation?: number
  color?: Color
}

const KeyboardKey: FC<KeyboardKeyProps> = ({
  width = 32,
  height = 32,
  color = "accentPurple",
  rotation,
}) => {
  const colors = theme.colors

  return (
    <svg
      style={{ transform: `rotate(${rotation}deg)`, margin: 4 }}
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="m10 0c-5.5228 0-10 4.4772-10 10v16c0 5.5228 4.4772 10 10 10h16c5.5229 0 10-4.4772 10-10v-16c0-5.5228-4.4771-10-10-10zm0 4h16c3.3137 0 6 2.6863 6 6v16c0 3.3137-2.6863 6-6 6h-16c-3.3137 0-6-2.6863-6-6v-16c0-3.3137 2.6863-6 6-6zm8 7c-0.3368 0-0.67278 0.16666-0.86523 0.5l-3.4648 6c-0.3849 0.6667 0.09739 1.5 0.86719 1.5h6.9277c0.7698 0 1.2501-0.8333 0.86523-1.5l-3.4629-6c-0.19245-0.33334-0.53039-0.5-0.86719-0.5z"
        fill={colors[color]}
      />
    </svg>
  )
}

export default KeyboardKey
