import React, { useState, useEffect } from "react"
import { FlatList, Pressable, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import FastImage from "react-native-fast-image"

import { translate } from "../../localization"
import { CustomText, CustomHeader, CustomSwitch } from "../../components"
import colors from "../../styles/colors"
import { StarIcon } from "../../assets/icons"
import { formatAmount } from "../../utils"
import { getBuildingImage, getResourceImage } from "../../utils/images"
import { BuildingName } from "../../types"
import styles from "./build.styles"

const MAX_BUILDING_LEVEL = 3

const Options = {
  build: "build",
  upgrade: "upgrade",
  maxLevel: "maxLevel",
} as const

type SwitchOptions = typeof Options[keyof typeof Options]

const mockBuildData = [{
  id: 1,
  name: "Timber Camp",
  level: 1,
  type: "wood",
  resources: {
    wood: 300,
    stone: 400,
    iron: 100,
  },
}, {
  id: 2,
  name: "Stone Quarry",
  level: 1,
  type: "stone",
  resources: {
    wood: 1300,
    stone: 1500,
    iron: 0,
  },
}, {
  id: 3,
  name: "Iron Mine",
  level: 1,
  type: "iron",
  resources: {
    wood: 1300,
    stone: 1500,
    iron: 0,
  },
},
{
  id: 4,
  name: "Iron Mine",
  level: 1,
  type: "wood",
  resources: {
    wood: 1300,
    stone: 1500,
    iron: 0,
  },
}]

interface BuildComponentProps {
  name: BuildingName,
  level: number,
  type: string,
  resources: {
    wood: number,
    stone: number,
    iron: number,
  }
}

const BuildComponent = ({
  name, level, type, resources,
}: BuildComponentProps) => (
  <Pressable style={styles.buildContainer} onPress={() => console.log("Go to marketplace?")}>
    <View style={styles.buildImageContainer}>
      <View style={styles.levelContainer}>
        <StarIcon />
        <CustomText containerStyle={styles.levelText} color={colors.bombay} format="regular12">
          {`${level} ${translate("level")}`}
        </CustomText>
      </View>
      <FastImage resizeMode="contain" source={getBuildingImage(name, resources, level, type)} style={styles.buildingImage} />
    </View>
    <View style={styles.buildInfoContainer}>
      <CustomText format="bold20">{name}</CustomText>
      <CustomText containerStyle={styles.resourseUpgradeText} color={colors.bombay} format="regular12">{translate("constructionCost")}</CustomText>
      <View style={styles.resourcesContainer}>
        {Object.keys(resources).map((resource, index) => (
          <View style={styles.resourceContainer} key={index}>
            <View style={styles.resourceImageContainer}>
              <FastImage source={getResourceImage(resource)} style={styles.resourceImage} />
            </View>
            <CustomText containerStyle={styles.resourceText} format="regular16" color={colors.bombay}>
              {formatAmount(resources[resource])}
            </CustomText>
          </View>
        ))}
      </View>
    </View>
  </Pressable>
)

const BuildScreen = () => {
  const [activeOption, setActiveOption] = useState<SwitchOptions>(Options.build)
  const [buildings, setBuildings] = useState(mockBuildData)
  const navigation = useNavigation()

  useEffect(() => {
    switch (activeOption) {
      case Options.build:
        setBuildings([...mockBuildData])
        break
      case Options.upgrade:
        setBuildings([...mockBuildData.filter((building) => building.level !== MAX_BUILDING_LEVEL)])
        break
      case Options.maxLevel:
        setBuildings([...mockBuildData.filter((building) => building.level === MAX_BUILDING_LEVEL)])
        break
      default:
        setBuildings([...mockBuildData])
    }
  }, [activeOption])

  return (
    <FlatList
      ListHeaderComponent={() => (
        <>
          <CustomHeader screenHeader={translate("build")} />
          <CustomSwitch
            active={activeOption}
            options={Object.values(Options)}
            toggleSwitch={setActiveOption}
          />
        </>
      )}
      style={styles.background}
      data={buildings}
      ListEmptyComponent={() => (
        <CustomText containerStyle={styles.emptyBuildings} format="regular20">{translate("noBuildings")}</CustomText>
      )}
      renderItem={({ item }) => <BuildComponent {...item as BuildComponentProps} />}
    />
  )
}

export default BuildScreen
