import React from "react"
import {
  ViewStyle, View, Text, StyleSheet,
} from "react-native"
import { scale } from "react-native-size-matters"
import colors from "../styles/colors"

type TextFormatType = "regular11" | "regular12" | "regular16" | "regular20" | "medium16" | "medium20" | "semiBold20" | "semiBold32" | "bold16" | "bold20" | "bold34"

interface CustomTextProps {
  children: string,
  format: TextFormatType,
  containerStyle?: ViewStyle,
  color?: string,
  center?: boolean,
}

const CustomText = ({
  children, containerStyle, format, color = colors.white, center = false,
}: CustomTextProps) => (
  <View style={{ ...containerStyle }}>
    <Text style={{ ...styles[format], color, textAlign: center ? "center" : "auto" }}>{children}</Text>
  </View>
)

const styles = StyleSheet.create({
  regular11: {
    fontSize: scale(11),
    fontFamily: "Poppins-Regular",
    lineHeight: scale(16.5),
  },
  regular12: {
    fontSize: scale(12),
    fontFamily: "Poppins-Regular",
    lineHeight: scale(16),
  },
  regular16: {
    fontSize: scale(16),
    fontFamily: "Poppins-Regular",
    lineHeight: scale(22),
  },
  regular20: {
    fontSize: scale(20),
    lineHeight: scale(30),
    fontFamily: "Poppins-Regular",
  },
  medium16: {
    fontSize: scale(16),
    fontFamily: "Poppins-Medium",
    lineHeight: scale(24),
    textAlign: "center",
  },
  medium20: {
    fontSize: scale(20),
    lineHeight: scale(30),
    fontFamily: "Poppins-Medium",
  },
  semiBold20: {
    fontSize: scale(20),
    lineHeight: scale(30),
    fontFamily: "Poppins-SemiBold",
  },
  semiBold32: {
    fontSize: scale(32),
    fontFamily: "Poppins-SemiBold",
    lineHeight: scale(48),
    textAlign: "center",
  },
  bold16: {
    fontSize: scale(16),
    fontFamily: "Poppins-Bold",
    lineHeight: scale(24),
  },
  bold20: {
    fontSize: scale(20),
    lineHeight: scale(22),
    fontFamily: "Poppins-Bold",
    marginBottom: scale(-5),
  },
  bold34: {
    fontFamily: "Poppins-Bold",
    fontSize: scale(34),
    lineHeight: scale(41),
  },
})

export default CustomText
