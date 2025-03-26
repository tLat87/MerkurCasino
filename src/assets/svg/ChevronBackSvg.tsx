import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M.303 10.007c.006-.194.044-.37.116-.531.072-.16.183-.316.332-.465L9.07.959c.238-.238.531-.357.88-.357.232 0 .442.055.63.166.194.11.346.26.457.448a1.241 1.241 0 0 1-.216 1.536L3.3 9.999l7.52 7.254c.26.266.39.568.39.905 0 .238-.058.451-.174.64-.11.188-.263.337-.456.448a1.176 1.176 0 0 1-.631.174c-.349 0-.642-.122-.88-.365L.75 11.003a1.514 1.514 0 0 1-.34-.465 1.322 1.322 0 0 1-.108-.531Z"
    />
  </Svg>
)
export default SvgComponent
