import React, { useState } from "react"
import { ImageBackground, View } from "react-native"
import { useNavigation, StackActions } from "@react-navigation/native"
import { scale } from "react-native-size-matters"
import { transact } from "@solana-mobile/mobile-wallet-adapter-protocol-web3js"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

import { CustomText, CustomButton } from "../../components"
import { translate } from "../../localization"
import Logo from "../../assets/Logo"
import styles from "./welcome.styles"
import { welcomeBackground } from "../../assets"
import useAuthorization from "../../utils/useAuthorization"
import { RootStackParamList } from "../../navigation"

type WeclomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>

const WelcomeScreen = () => {
  const navigation = useNavigation<WeclomeScreenNavigationProp>()
  const { authorizeSession } = useAuthorization()
  const [authorizationInProgress, setAuthorizationInProgress] = useState(false)

  const handleConnectPress = async () => {
    try {
      if (authorizationInProgress) {
        return
      }
      setAuthorizationInProgress(true)
      await transact(async (wallet) => {
        await authorizeSession(wallet)
        navigation.dispatch(StackActions.replace("Home"))
      })
    } finally {
      setAuthorizationInProgress(false)
    }
  }

  return (
    <ImageBackground source={welcomeBackground} style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo width={scale(124)} height={scale(91)} />
        <CustomText containerStyle={styles.header} format="semiBold32">
          {translate("welcomeToMeta")}
        </CustomText>
      </View>
      <CustomButton onClick={handleConnectPress}>
        {translate("connectNow")}
      </CustomButton>
      <CustomButton
        onClick={() => navigation.navigate("Home")}
        containerStyle={styles.quickLookContainer}
      >
        {translate("quickLook")}
      </CustomButton>
    </ImageBackground>
  )
}

export default WelcomeScreen
