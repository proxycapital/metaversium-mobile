import * as React from "react"
import Svg, { Path } from "react-native-svg"

import { MenuIconProps } from "../../types"

function JobsIcon({ opacity = 0.76, fillColor }: MenuIconProps) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
    >
      <Path
        d="M20.23 16.663A3.467 3.467 0 0021 14.5a3.5 3.5 0 10-7 0c.004.787.275 1.55.77 2.163a6.04 6.04 0 00-2.27 2.027 6.04 6.04 0 00-2.27-2.027A3.467 3.467 0 0011 14.5a3.5 3.5 0 10-7 0c.004.787.275 1.55.77 2.163A6 6 0 001.5 22a1 1 0 001 1h20a1 1 0 001-1 6 6 0 00-3.27-5.337zM7.5 13a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-3.874 8a4 4 0 017.748 0H3.626zM17.5 13a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-3.873 8a4 4 0 017.746 0h-7.746zM7.7 8.4a1 1 0 101.6 1.2 4 4 0 016.4 0 1 1 0 101.6-1.2 6 6 0 00-2.065-1.742 3.464 3.464 0 00-.26-4.633A3.5 3.5 0 009 4.5c.003.785.273 1.545.765 2.157A5.994 5.994 0 007.7 8.4zM12.5 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
        fill={fillColor}
        opacity={opacity}
      />
    </Svg>
  )
}

export default JobsIcon
