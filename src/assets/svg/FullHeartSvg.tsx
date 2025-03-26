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
        fill="#F9CF22"
        fillRule="evenodd"
        d="M7.973 2.015c1.82.132 3.718 1.02 5.535 2.817 1.816-1.797 3.711-2.683 5.53-2.812 2.054-.145 3.869.685 5.182 1.994 2.582 2.574 3.393 7.232.19 10.436a.826.826 0 0 1-.034.032l-10.245 9.28a.929.929 0 0 1-1.247 0L2.64 14.482a.883.883 0 0 1-.033-.032C-.614 11.23.192 6.571 2.782 4 4.1 2.692 5.918 1.866 7.972 2.015Z"
        clipRule="evenodd"
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
