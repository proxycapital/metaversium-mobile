import * as React from "react"
import Svg, { Path } from "react-native-svg"

import { MenuIconProps } from "../../types"

function SupplyIcon({ opacity = 0.76, fillColor }: MenuIconProps) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
    >
      <Path
        d="M4.5 23h16a1 1 0 001-1V10a1 1 0 00-1-1h-16a1 1 0 00-1 1v12a1 1 0 001 1zm1-12h14v10h-14V11zm11 4v2a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2a1 1 0 112 0v1h4v-1a1 1 0 012 0zM6.5 5h12a1 1 0 110 2h-12a1 1 0 010-2zm2-2a1 1 0 010-2h8a1 1 0 110 2h-8z"
        fill={fillColor}
        opacity={opacity}
      />
    </Svg>
  )
}

export default SupplyIcon
