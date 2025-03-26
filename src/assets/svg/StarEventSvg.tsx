import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="M26.25 5.625a1.875 1.875 0 0 0-1.875-1.875h-3.75V1.875H18.75V3.75h-7.5V1.875H9.375V3.75h-3.75A1.875 1.875 0 0 0 3.75 5.625v18.75a1.875 1.875 0 0 0 1.875 1.875h3.75v-1.875h-3.75V5.625h3.75V7.5h1.875V5.625h7.5V7.5h1.875V5.625h3.75v5.625h1.875V5.625Z"
    />
    <Path
      fill="url(#b)"
      d="m19.688 14.063 2.39 4.629 5.11.741-3.75 3.604.937 5.088-4.688-2.402L15 28.125l.938-5.088-3.75-3.604 5.25-.741 2.25-4.63Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={15}
        x2={15}
        y1={1.875}
        y2={26.25}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFE52B" />
        <Stop offset={1} stopColor="#FCC809" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={19.688}
        x2={19.688}
        y1={14.063}
        y2={28.125}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFE52B" />
        <Stop offset={1} stopColor="#FCC809" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SvgComponent
