import * as React from "react"
import Svg, { Path } from "react-native-svg"

import { MenuIconProps } from "../../types"

function VillageIcon({ opacity = 0.76, fillColor }: MenuIconProps) {
  return (
    <Svg
      width={21}
      height={17}
      viewBox="0 0 21 17"
      fill="none"
    >
      <Path
        d="M17.5 9h3l-10-9-10 9h3v8h2v-2h10v2h2V9zM5.71 7h9.58l.21.19V9h-10V7.19L5.71 7zm7.36-2H7.93l2.57-2.31L13.07 5zM5.5 13v-2h10v2h-10z"
        fill={fillColor}
        opacity={opacity}
      />
    </Svg>
  )
}

export default VillageIcon
