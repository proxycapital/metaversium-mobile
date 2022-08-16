import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

function RightArrowIcon() {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
    >
      <Mask
        id="a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={0}
        width={8}
        height={12}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.726.47a.736.736 0 000 1.06L7.32 6l-4.594 4.47a.736.736 0 000 1.06.786.786 0 001.09 0L9.5 6 3.816.47a.786.786 0 00-1.09 0z"
          fill="#006FFD"
        />
      </Mask>
      <G mask="url(#a)">
        <Path fill="#8F9098" d="M0 -0.000976562H11.9995V11.998523438H0z" />
      </G>
    </Svg>
  )
}

export default RightArrowIcon
