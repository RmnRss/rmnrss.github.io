import { FC } from "react"
import KeyboardKey from "./KeyboardKey"

const Keyboard: FC = () => {
  return (
    <div>
      <div className="w-full flex align-middle justify-center">
        <KeyboardKey />
      </div>
      <div className="w-full flex align-middle justify-center">
        <KeyboardKey rotation={-90} />
        <KeyboardKey rotation={180} />
        <KeyboardKey rotation={90} />
      </div>
    </div>
  )
}

export default Keyboard
