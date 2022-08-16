import React from "react"
import {
  Svg, Path, Stop, LinearGradient, Defs,
} from "react-native-svg"

interface LogoIconProps {
  width: number;
  height: number;
}

function LogoIcon({ width, height }: LogoIconProps) {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 308 221"
    />
  )
}

export default LogoIcon
