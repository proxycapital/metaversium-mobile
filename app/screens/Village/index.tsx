import React from "react"
import { View, FlatList, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import FastImage from "react-native-fast-image"

import { CustomHeader, CustomText, BuildingTypesSelector } from "../../components"
import { translate } from "../../localization"
import colors from "../../styles/colors"
import { StarIcon } from "../../assets/icons"
import { VillageStackParamList } from "../../navigation/villageStackNavigation"
import { getBuildingImage, getResourceImage } from "../../utils/images"
import { Building } from "../../types"
import styles from "./village.styles"

const mockBuildingData = [{
  id: 1,
  level: 2,
  type: "resources",
  name: "Timber camp",
  resourse: "wood",
  resourseRate: 124,
}, {
  id: 2,
  level: 3,
  type: "resources",
  name: "Stone Quarry",
  resourse: "stone",
  resourseRate: 674,
}, {
  id: 3,
  level: 3,
  type: "resources",
  name: "Iron Mine",
  resourse: "iron",
  resourseRate: 3278,
}, {
  id: 4,
  level: 1,
  type: "brewery",
  name: "Brewery",
  resourse: "hop",
  resourseRate: 33,
}]

type BuildingComponentNavigationProp = NativeStackNavigationProp<VillageStackParamList>

interface BuildingComponentProps extends Building {
  navigation: BuildingComponentNavigationProp,
}

const BuildingComponent = ({
  level, type, name, resourse, resourseRate, navigation,
}: BuildingComponentProps) => (
  <Pressable
    style={styles.buildingContainer}
    onPress={() => navigation.navigate("Building", {
      buildingInfo: {
        level, type, name, resourse, resourseRate,
      },
    })}
  >
    <View>
      <View style={styles.levelsContainer}>
        <StarIcon />
        <CustomText containerStyle={styles.levelText} color={colors.bombay} format="regular12">
          {`${level} ${translate("level")}`}
        </CustomText>
      </View>
      <FastImage resizeMode="contain" style={styles.buildingImage} source={getBuildingImage(name, resourse, level, type)} />
    </View>
    <View>
      <CustomText format="bold16">{name}</CustomText>

      <View style={styles.resourceContainer}>
        <View style={styles.resourceImageContainer}>
          <FastImage resizeMode="contain" style={styles.resourceImage} source={getResourceImage(resourse)} />
        </View>
        <View>
          <View style={styles.resourceTextContainer}>
            <CustomText
              format="medium20"
              color={colors.selectiveYellow}
              containerStyle={styles.plusText}
            >
              +
            </CustomText>
            <CustomText format="medium20">{resourseRate}</CustomText>
          </View>
          <CustomText format="regular11" color={colors.bombay}>
            {`${translate(resourse)}/${translate("hour")}`}
          </CustomText>
        </View>
      </View>
    </View>
  </Pressable>
)

const VillageScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<VillageStackParamList>>()
  return (
    <View style={styles.container}>
      <CustomHeader screenHeader={translate("village")} />
      <BuildingTypesSelector />
      <FlatList
        contentContainerStyle={styles.buildingsContainer}
        columnWrapperStyle={styles.buildingsContainer}
        numColumns={2}
        data={mockBuildingData}
        renderItem={({ item }) => <BuildingComponent {...item} navigation={navigation} />}
        ListEmptyComponent={() => (
          <CustomText format="bold20">{translate("noBuilding")}</CustomText>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default VillageScreen
