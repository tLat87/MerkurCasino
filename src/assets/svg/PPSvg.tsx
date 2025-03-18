import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M2 5.006A2.507 2.507 0 0 1 4.506 2.5H19.54a2.506 2.506 0 0 1 2.506 2.506V9.67a13.331 13.331 0 0 1-9.408 12.737c-.4.124-.83.124-1.231 0A13.331 13.331 0 0 1 2 9.67V5.006Zm10.024 6.801a3.222 3.222 0 1 0 0-6.443 3.222 3.222 0 0 0 0 6.443Zm5.945 4.143a7.875 7.875 0 0 0-11.89 0 11.169 11.169 0 0 0 5.945 4.399c2.423-.749 4.52-2.3 5.945-4.399Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
