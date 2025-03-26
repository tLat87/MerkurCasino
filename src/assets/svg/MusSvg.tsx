import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={41}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M21.52 8.895a2.104 2.104 0 0 0-.953.033l-.01.002-13.085 3.632A2.104 2.104 0 0 0 5.92 14.58v9.416a4.246 4.246 0 1 0 2.571 3.903v-8.984l12.155-3.376v4.224a4.246 4.246 0 1 0 2.572 4.02V10.903c0-.066-.006-.131-.016-.195a2.104 2.104 0 0 0-1.683-1.814Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
