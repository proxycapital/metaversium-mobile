import * as React from "react"
import Svg, { Path } from "react-native-svg"

import { MenuIconProps } from "../../types"

function BuildIcon({ opacity = 0.76, fillColor }: MenuIconProps) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.25 5.65a.1.1 0 00-.1.1v5.5a.1.1 0 00.1.1h1.5a.1.1 0 00.1-.1v-1a.9.9 0 01.9-.9h2.5a.9.9 0 01.9.9v2.1h1.7v-2.1a.9.9 0 01.9-.9c1.48 0 2.813.268 3.77.533l.158.044a2.898 2.898 0 00-1.474-1.819 4.116 4.116 0 00-1.688-.457h-.02s.001 0 0 0H8.75a.9.9 0 01-.9-.9v-1a.1.1 0 00-.1-.1h-1.5zm9.25 1.1l.001-.9H15.528a2.786 2.786 0 01.223.011c.141.011.337.032.57.073a5.915 5.915 0 011.725.583c.642.34 1.304.861 1.802 1.652.5.794.802 1.809.802 3.081a.9.9 0 01-1.264.823h-.002l-.013-.006a8.36 8.36 0 00-.327-.128 13.104 13.104 0 00-3.394-.75v8.061a.9.9 0 11-1.8 0v-5.1h-1.7v5.1a.9.9 0 11-1.8 0v-8.1h-.7v.1a1.9 1.9 0 01-1.9 1.9h-1.5a1.9 1.9 0 01-1.9-1.9v-5.5c0-1.05.85-1.9 1.9-1.9h1.5c1.05 0 1.9.85 1.9 1.9v.1h5.851v.9z"
        fill={fillColor}
        opacity={opacity}
      />
    </Svg>
  )
}

export default BuildIcon
