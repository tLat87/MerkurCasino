import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={78}
    height={79}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M2.438 39.5c0 20.451 16.37 37.031 36.562 37.031 20.192 0 36.563-16.58 36.563-37.031S59.192 2.469 39 2.469c-20.192 0-36.563 16.58-36.563 37.031Zm34.496-6.348H59.72v12.696H36.934V59.25L18.281 39.5l18.653-19.75v13.402Z"
    />
  </Svg>
)
export default SvgComponent
