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
      d="M4 19.5v-2h2v-7c0-1.383.417-2.612 1.25-3.687.833-1.075 1.917-1.779 3.25-2.113V4c0-.417.146-.77.438-1.062A1.451 1.451 0 0 1 12 2.5c.416 0 .77.145 1.063.438.293.293.438.647.437 1.062v.7c1.333.333 2.417 1.038 3.25 2.113C17.583 7.888 18 9.117 18 10.5v7h2v2H4Zm8 3c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 10 20.5h4c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 12 22.5Z"
    />
  </Svg>
)
export default SvgComponent
