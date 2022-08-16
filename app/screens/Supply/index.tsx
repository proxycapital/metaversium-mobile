import React, { useState } from "react"
import { View, FlatList, Pressable } from "react-native"
import FastImage from "react-native-fast-image"

import { translate } from "../../localization"
import { CustomHeader, CustomText, CustomSwitch } from "../../components"
import { ResourceDataType } from "../../types"
import { getResourceImage } from "../../utils/images"
import styles from "./supply.styles"

const mockSupplyData: Array<ResourceDataType> = [{
  id: 1,
  name: "wood",
  amount: 18713,
}, {
  id: 2,
  name: "stone",
  amount: 10020,
}, {
  id: 3,
  name: "iron",
  amount: 98,
}]

const mockUnitsData: Array<any> = []

const Options = {
  resources: "resources",
  units: "units",
} as const

type SwitchOptions = typeof Options[keyof typeof Options]

const SupplyComponent = ({ name, amount }: ResourceDataType) => (
  <View style={styles.supplyContainer}>
    <View style={styles.supplyInfoContainer}>
      <View style={styles.resourseImageContainer}>
        <FastImage source={getResourceImage(name)} style={styles.resourseImage} />
      </View>
      <View style={styles.resourseBalanceContainer}>
        <CustomText format="regular16">{translate(name)}</CustomText>
        <View style={styles.balanceContainer}>
          <CustomText format="semiBold20">{String(amount)}</CustomText>
        </View>
      </View>
    </View>
    <Pressable style={styles.addSupplyBtn} onPress={() => console.log("Go to exchange page?")}>
      <CustomText format="medium16">{translate("trade")}</CustomText>
    </Pressable>
  </View>
)

const SupplyScreen = () => {
  const [activeOption, setActiveOption] = useState<SwitchOptions>(Options.resources)

  return (
    <View style={styles.container}>
      <CustomHeader screenHeader={translate("supply")} />
      <CustomSwitch
        active={activeOption}
        options={Object.values(Options)}
        toggleSwitch={setActiveOption}
      />
      <FlatList
        renderItem={({ item }) => <SupplyComponent {...item} />}
        ListEmptyComponent={() => (
          <CustomText containerStyle={styles.emptySupply} format="regular20" center>
            {translate(activeOption === Options.resources ? "noResources" : "noUnits")}
          </CustomText>
        )}
        data={activeOption === Options.resources ? mockSupplyData : mockUnitsData}
      />
    </View>
  )
}

export default SupplyScreen
