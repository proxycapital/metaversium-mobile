import React from "react"
import {
  ScrollView, View, Image, ImageBackground,
} from "react-native"
import FastImage from "react-native-fast-image"

import gradientBackground from "../../assets/gradientBackgroundCube.png"
import { CustomHeader, CustomText, CustomButton } from "../../components"
import { translate } from "../../localization"
import colors from "../../styles/colors"
import { getResourceImage } from "../../utils/images"
import { Worker } from "../../types"
import { WorkerIcon } from "../../assets/icons"
import styles from "./worker.styles"

const mockWorkerData = {
  unclaimedBalance: "42 089",
  resourseType: "wood",
}

interface WorkerScreenProps {
  route: {
    params: {
      workerInfo: Worker
    }
  }
}

const WorkerScreen = ({
  route: {
    params: {
      workerInfo: {
        name, status, currentWork, image,
      },
    },
  },
}: WorkerScreenProps) => (
  <ScrollView style={styles.container}>
    <CustomHeader withBackBtn screenHeader={name} navigationHeader="Worker" />
    <ImageBackground source={gradientBackground} style={styles.workerImageContainer}>
      <FastImage source={image} resizeMode="contain" style={styles.workerImage} />
    </ImageBackground>
    <View style={styles.workerStatusContainer}>
      <Image source={WorkerIcon} style={styles.workerIcon} />
      <CustomText format="regular16">{status !== "free" ? translate(currentWork) : translate("chill")}</CustomText>
    </View>
    <View style={styles.unclaimedContainer}>
      <FastImage
        source={getResourceImage(mockWorkerData.resourseType)}
        style={styles.resourseImage}
      />
      <View>
        <View style={styles.balanceContainer}>
          <CustomText format="bold20" color={colors.selectiveYellow}>{mockWorkerData.unclaimedBalance}</CustomText>
          <CustomText containerStyle={styles.balanceResourse} format="bold20">{translate("wood")}</CustomText>
        </View>
        <CustomText format="medium16">{translate("canBeClaimed")}</CustomText>
      </View>
    </View>
    <View style={styles.buttonsContainer}>
      <CustomButton
        onClick={() => console.log("Run Claim tx")}
      >
        {translate("claim")}
      </CustomButton>
      <CustomButton
        onClick={() => console.log("Run finish tx")}
        containerStyle={styles.finishBtnContainer}
      >
        {translate("finish")}
      </CustomButton>
    </View>
  </ScrollView>
)

export default WorkerScreen
