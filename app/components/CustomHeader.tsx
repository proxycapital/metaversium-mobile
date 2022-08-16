import React from "react"
import {
  View, Pressable, StyleSheet, Platform,
} from "react-native"
import { scale } from "react-native-size-matters"
import { useNavigation } from "@react-navigation/native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import CustomText from "./CustomText"
import { translate } from "../localization"
import { BackIcon } from "../assets/icons"

interface CustomHeaderProps {
  height: number;
  withBackBtn: boolean;
  screenHeader: string;
  navigationHeader: string;
}

const CustomHeader = ({
  height = scale(100),
  withBackBtn = false,
  screenHeader = "",
  navigationHeader = "",
}: Partial<CustomHeaderProps>) => {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  return (
    <View style={{ marginTop: Platform.OS === "ios" ? insets.top : 0, height }}>
      {(withBackBtn && navigationHeader) && (
        <View style={styles.navigationContainer}>
          <Pressable onPress={navigation.goBack} style={styles.goBackBtn}>
            <BackIcon />
            <CustomText format="regular16" containerStyle={styles.backText}>
              {translate("back")}
            </CustomText>
          </Pressable>
          <View style={styles.headerCenterTextContainer}>
            <CustomText format="bold16">
              {navigationHeader}
            </CustomText>
          </View>
        </View>
      )}
      {screenHeader && (
        <View style={
          withBackBtn && navigationHeader ? styles.notAloneScreenHeader : styles.aloneScreenHeader
          }
        >
          <CustomText format="bold34">{screenHeader}</CustomText>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    height: scale(42),
    paddingHorizontal: scale(9),
  },
  aloneScreenHeader: {
    paddingHorizontal: scale(16),
    marginTop: scale(45),
  },
  notAloneScreenHeader: {
    marginLeft: scale(16),
    marginTop: scale(2),
  },
  goBackBtn: {
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerCenterTextContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: scale(4),
    justifyContent: "center",
    alignItems: "center",
  },
  backText: {
    marginLeft: scale(4),
  },
})

export default CustomHeader
