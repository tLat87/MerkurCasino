import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={26}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#F9CF22"
        d="m13.156 5.187.351.348.352-.348c1.75-1.731 3.54-2.549 5.215-2.668l-.036-.499.036.5c1.89-.135 3.568.627 4.793 1.848 2.432 2.424 3.155 6.762.189 9.729h-.001l-.003.004a.508.508 0 0 1-.012.01l-10.245 9.28a.429.429 0 0 1-.575 0l-10.245-9.28a.502.502 0 0 1-.016-.014c-2.984-2.984-2.262-7.323.175-9.743 1.228-1.22 2.91-1.977 4.803-1.84 1.677.122 3.468.941 5.219 2.673Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h26v26H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
