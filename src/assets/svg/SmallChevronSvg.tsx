import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M7.233 6.525a.813.813 0 0 1-.263.586l-4.893 4.737a.704.704 0 0 1-.517.21.718.718 0 0 1-.372-.098.72.72 0 0 1-.268-.264.73.73 0 0 1 .127-.903L5.47 6.53 1.047 2.263a.741.741 0 0 1-.127-.909.72.72 0 0 1 .268-.263.692.692 0 0 1 .372-.103c.205 0 .377.072.517.215L6.97 5.94a.891.891 0 0 1 .2.274.777.777 0 0 1 .063.312Z"
    />
  </Svg>
)
export default SvgComponent
