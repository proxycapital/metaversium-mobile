import React, { useState } from "react"
import { Pressable, FlatList, StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"

import { translate } from "../localization"
import CustomText from "./CustomText"
import colors from "../styles/colors"

const BuildingTypes = [{
  id: 1,
  value: "all",
  isActive: true,
}, {
  id: 2,
  value: "resources",
  isActive: false,
}, {
  id: 3,
  value: "economy",
  isActive: false,
}, {
  id: 4,
  value: "army",
  isActive: false,
}]

const BuildingTypeSelector = ({
  id, value, isActive, onSelect,
}) => (
  <Pressable
    onPress={() => onSelect(id)}
    style={[styles.buildingTypeContainer, isActive && styles.isActive]}
  >
    <CustomText
      format="regular12"
      color={isActive ? colors.white : colors.bombay}
    >
      {translate(value)}
    </CustomText>
  </Pressable>
)

const BuildingTypesSelector = () => {
  const [buildingTypes, setBuildingTypes] = useState(BuildingTypes)

  const onSelectType = (id) => {
    const allInvactiveTypes = buildingTypes.map((type) => {
      if (type.id === id) {
        type.isActive = true
        return type
      }
      type.isActive = false
      return type
    })
    setBuildingTypes(allInvactiveTypes)
  }

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.buildingsTypesContainer}
      horizontal
      data={buildingTypes}
      renderItem={({ item }) => <BuildingTypeSelector {...item} onSelect={onSelectType} />}
    />
  )
}

const styles = StyleSheet.create({
  buildingsTypesContainer: {
    marginLeft: scale(16),
    height: scale(60),
  },
  buildingTypeContainer: {
    backgroundColor: colors.shark,
    borderRadius: scale(100),
    borderWidth: 1,
    borderColor: colors.cornflowerBlue,
    minWidth: scale(45),
    justifyContent: "center",
    alignItems: "center",
    height: scale(32),
    marginRight: scale(8),
    paddingHorizontal: scale(8),
  },
  isActive: {
    color: "red",
    backgroundColor: colors.cornflower,
  },
})

export default BuildingTypesSelector
