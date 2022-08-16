import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"

function SolIcon() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 48 48"
      fill="none"
    >
      <G clipPath="url(#clip0_1191_10215)">
        <Path
          d="M7.799 36.634c.294-.376.693-.588 1.11-.59h38.305a.67.67 0 01.436.17c.13.11.23.266.29.449.06.183.075.384.044.579-.03.194-.105.373-.215.512l-7.567 9.655a1.606 1.606 0 01-.51.434c-.19.1-.394.152-.6.152H.787a.672.672 0 01-.433-.17.989.989 0 01-.287-.447 1.26 1.26 0 01-.046-.575c.03-.193.103-.37.21-.511L7.8 36.634z"
          fill="url(#paint0_linear_1191_10215)"
        />
        <Path
          d="M7.799.585c.297-.37.695-.58 1.11-.585h38.305a.67.67 0 01.436.168c.13.11.23.267.29.45.06.183.075.384.044.579-.03.194-.105.373-.215.512l-7.567 9.655a1.604 1.604 0 01-.51.434c-.19.1-.394.152-.6.152H.787a.672.672 0 01-.433-.17.989.989 0 01-.287-.447 1.26 1.26 0 01-.046-.575c.03-.193.103-.37.21-.511L7.8.585z"
          fill="url(#paint1_linear_1191_10215)"
        />
        <Path
          d="M40.202 18.495a1.605 1.605 0 00-.51-.434 1.28 1.28 0 00-.6-.152H.787a.67.67 0 00-.436.169.988.988 0 00-.29.45 1.26 1.26 0 00-.044.578c.03.194.105.372.214.513L7.8 29.274c.146.185.319.333.51.433.19.101.394.153.6.152h38.305a.67.67 0 00.436-.168c.13-.11.23-.266.29-.45a1.26 1.26 0 00.044-.578 1.11 1.11 0 00-.216-.513l-7.566-9.655z"
          fill="url(#paint2_linear_1191_10215)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1191_10215"
          x1={43.555}
          y1={-5.76717}
          x2={5.50965}
          y2={51.3399}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#00FFA3" />
          <Stop offset={1} stopColor="#DC1FFF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1191_10215"
          x1={31.9639}
          y1={-13.4897}
          x2={-6.08054}
          y2={43.619}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#00FFA3" />
          <Stop offset={1} stopColor="#DC1FFF" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_1191_10215"
          x1={37.7219}
          y1={-9.65372}
          x2={-0.322498}
          y2={47.455}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#00FFA3" />
          <Stop offset={1} stopColor="#DC1FFF" />
        </LinearGradient>
        <ClipPath id="clip0_1191_10215">
          <Path fill="#fff" d="M0 0H48V48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SolIcon
