import * as React from "react"
import Svg, { Path } from "react-native-svg"

import { MenuIconProps } from "../../types"

function ProfileIcon({ opacity = 0.76, fillColor }: MenuIconProps) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
    >
      <Path
        d="M12.5 1a11 11 0 1011 11 11.013 11.013 0 00-11-11zm0 20a9.641 9.641 0 01-5.209-1.674 6.999 6.999 0 0110.418 0A9.167 9.167 0 0112.5 21zm6.694-3.006a8.98 8.98 0 00-13.388 0 9 9 0 1113.388 0zM12.5 6a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z"
        fill={fillColor}
        opacity={opacity}
      />
    </Svg>
  )
}

export default ProfileIcon
