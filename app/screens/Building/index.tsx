import React from "react"
import {
  ScrollView, View, Image, ImageBackground,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

import { gradientBackgroundCubeBig } from "../../assets"
import { CustomButton, CustomHeader, CustomText } from "../../components"
import { translate } from "../../localization"
import colors from "../../styles/colors"
import { getBuildingImage, getResourceImage } from "../../utils/images"
import { Building } from "../../types"
import { RootStackParamList } from "../../navigation"
import styles from "./building.styles"

interface BuildingScreenProps {
  route: {
    params: {
      buildingInfo: Building
    }
  }
}

type BuildingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>

const BuildingScreen = ({
  route: {
    params: {
      buildingInfo: {
        name, level, resourse, resourseRate, type,
      },
    },
  },
}: BuildingScreenProps) => {
  const navigation = useNavigation<BuildingScreenNavigationProp>()

  return (
    <ScrollView style={styles.container}>
      <CustomHeader
        withBackBtn
        navigationHeader={translate("village")}
        screenHeader={translate(name.split(" ").join("").toLowerCase())}
      />
      <View style={styles.buildingImageContainer}>
        <ImageBackground source={gradientBackgroundCubeBig}>
          <Image
            style={styles.buildingImage}
            resizeMode="contain"
            source={getBuildingImage(name, resourse, level, type)}
          />
        </ImageBackground>
      </View>
      <CustomText format="regular16" containerStyle={styles.paddingHorizontal}>
        {translate(`${name.toLowerCase()}Desc`)}
      </CustomText>
      <View style={styles.buildingRateContainer}>
        <Image style={styles.resourceImage} source={getResourceImage(resourse)} />
        <CustomText format="semiBold20" color={colors.selectiveYellow}>
          {`+ ${resourseRate} `}
        </CustomText>
        <CustomText format="semiBold20">
          {translate(resourse)}
        </CustomText>
        <CustomText format="semiBold20" color={colors.bombay}>
          {` / ${translate("hour")}`}
        </CustomText>
      </View>
      <View style={styles.paddingHorizontal}>
        <CustomButton onClick={() => navigation.navigate("Workers")}>
          {translate("farm")}
        </CustomButton>
        <CustomText containerStyle={styles.levelLabel} format="semiBold20">{translate("nextLevel")}</CustomText>
        <View style={styles.requiredResourses}>
          <View style={styles.requiredResourse}>
            <Image style={styles.requireResourseImage} source={getResourceImage("stone")} />
            <CustomText format="regular16">
              {`$${translate("stone")}`}
            </CustomText>
            <View style={styles.requiredAmountContainer}>
              <Image style={styles.moneyImage} source={getResourceImage("money")} />
              <CustomText format="medium16">333</CustomText>
            </View>
          </View>
          <View style={styles.requiredResourse}>
            <Image style={styles.requireResourseImage} source={getResourceImage("iron")} />
            <CustomText format="regular16">
              {`$${translate("iron")}`}
            </CustomText>
            <View style={styles.requiredAmountContainer}>
              <Image style={styles.moneyImage} source={getResourceImage("money")} />
              <CustomText format="medium16">436</CustomText>
            </View>
          </View>
          <View style={styles.requiredResourse}>
            <Image style={styles.requireResourseImage} source={getResourceImage("wood")} />
            <CustomText format="regular16">
              {`$${translate("wood")}`}
            </CustomText>
            <View style={styles.requiredAmountContainer}>
              <Image style={styles.moneyImage} source={getResourceImage("money")} />
              <CustomText format="medium16">846</CustomText>
            </View>
          </View>
        </View>
        <CustomButton
          containerStyle={{ ...styles.upgradeButton }}
          onClick={() => console.log("Updagrade building")}
        >
          {translate("upgrade")}
        </CustomButton>
      </View>
    </ScrollView>
  )
}

export default BuildingScreen
