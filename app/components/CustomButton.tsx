import React from "react"
import { ViewStyle, Pressable, StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"

import colors from "../styles/colors"
import CustomText from "./CustomText"

interface CustomButtonProps {
  onClick: () => void;
  children: string;
  containerStyle?: ViewStyle;
}

const CustomButton = ({ onClick, children, containerStyle }: CustomButtonProps) => (
  <Pressable
    onPress={onClick}
    style={{ ...styles.container, ...containerStyle }}
  >
    <CustomText format="medium16">{children}</CustomText>
  </Pressable>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cornflower,
    height: scale(48),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale(8),
  },
})

export default CustomButton
