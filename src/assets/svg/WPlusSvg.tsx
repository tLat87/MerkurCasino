import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const SvgComponent = ({ fill = "#fff", ...props }: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M10.286 1.286a1.286 1.286 0 1 0-2.572 0v6.428H1.286a1.286 1.286 0 0 0 0 2.572h6.428v6.428a1.286 1.286 0 1 0 2.572 0v-6.428h6.428a1.286 1.286 0 1 0 0-2.572h-6.428V1.286Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
