import React from "react"
import { Pressable, View, StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"

import colors from "../styles/colors"
import CustomText from "./CustomText"
import { translate } from "../localization"

interface CustomSwitchProps {
  active: string,
  options: Array<string>,
  toggleSwitch: (newActive: string) => void,
}

const CustomSwitch = ({ active, options, toggleSwitch }: CustomSwitchProps) => (
  <View style={styles.container}>
    {options.map((option, index) => (
      <Pressable
        style={[styles.optionContainer, active === option && styles.activeOption, { width: `${(100 / options.length)}%` }]}
        key={index}
        onPress={() => toggleSwitch(option)}
      >
        <View style={styles.optionTextContainer}>
          <CustomText format="regular12">
            {translate(option)}
          </CustomText>
        </View>
        {(index + 1 !== options.length) && ((option !== active) && <View style={styles.divider} />)}
      </Pressable>
    ))}
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tuna,
    borderRadius: scale(8),
    height: scale(32),
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: scale(16),
    marginBottom: scale(26),
    paddingHorizontal: scale(2),
  },
  activeOption: {
    backgroundColor: colors.cornflower,
  },
  optionTextContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  optionContainer: {
    borderRadius: scale(7),
    height: scale(28),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: scale(2),
    flexDirection: "row",
  },
  divider: {
    width: scale(0.8),
    height: scale(16),
    backgroundColor: colors.scarpaFlow,
  },
})

export default CustomSwitch
