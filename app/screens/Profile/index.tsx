import React from "react"
import {
  Pressable, View, Image, Linking, Platform, ScrollView,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { transact } from "@solana-mobile/mobile-wallet-adapter-protocol"
import Clipboard from "@react-native-clipboard/clipboard"
import { showMessage } from "react-native-flash-message"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

import Links from "../../config/Links.json"
import { CustomText } from "../../components"
import { translate } from "../../localization"
import colors from "../../styles/colors"
import { avatar } from "../../assets"
import {
  SolIcon, RightArrowIcon, DiscordIcon, CopyIcon,
  LogOutIcon, DocsIcon, AboutUsIcon, TwitterIcon,
} from "../../assets/icons"
import { formatSolAddress } from "../../utils"
import useAuthorization from "../../utils/useAuthorization"
import { RootStackParamList } from "../../navigation"
import styles from "./profile.styles"

const mockSolBalance = "0.1"

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>()
  const insets = useSafeAreaInsets()
  const { deauthorizeSession, selectedAccount } = useAuthorization()

  const onCopy = () => {
    Clipboard.setString(String(selectedAccount?.publicKey))
    showMessage({
      message: translate("addressCopied"),
      type: "info",
    })
  }

  return (
    <ScrollView style={{ ...styles.container, paddingTop: Platform.OS === "ios" ? insets.top : 0 }}>
      <View style={styles.profileContainer}>
        <CustomText format="bold16">{translate("settings")}</CustomText>
        <Pressable style={styles.avatarContainer} onPress={() => console.log("upload avatar image in Q32024")}>
          <Image source={avatar} />
        </Pressable>
        <Pressable onPress={onCopy} style={styles.addressContainer}>
          <CustomText
            containerStyle={styles.addressText}
            format="bold16"
          >
            {selectedAccount?.publicKey ? formatSolAddress(String(selectedAccount?.publicKey)) : "quickLook"}
          </CustomText>
          <CopyIcon />
        </Pressable>
      </View>
      <View style={styles.balanceContainer}>
        <CustomText format="bold20">{translate("balance")}</CustomText>
        <View style={styles.balanceSolContainer}>
          <SolIcon />
          <CustomText
            containerStyle={styles.balanceText}
            color={colors.selectiveYellow}
            format="bold20"
          >
            {mockSolBalance}
          </CustomText>
        </View>
      </View>
      <View style={styles.socialLinksContainer}>
        <Pressable
          style={styles.socialLinkContainer}
          onPress={async () => Linking.openURL(Links.discordInvite)}
        >
          <View style={styles.socialIconsContainer}>
            <Image source={DiscordIcon} style={styles.socialIcon} />
            <CustomText format="regular16">Discord</CustomText>
          </View>
          <RightArrowIcon />
        </Pressable>
        <Pressable
          style={styles.socialLinkContainer}
          onPress={async () => Linking.openURL(Links.twitter)}
        >
          <View style={styles.socialIconsContainer}>
            <Image source={TwitterIcon} style={styles.socialIcon} />
            <CustomText format="regular16">Twitter</CustomText>
          </View>
          <RightArrowIcon />
        </Pressable>
        <Pressable
          style={styles.socialLinkContainer}
          onPress={async () => Linking.openURL(Links.gitbook)}
        >
          <View style={styles.socialIconsContainer}>
            <Image source={DocsIcon} style={styles.socialIcon} />
            <CustomText format="regular16">{translate("docs")}</CustomText>
          </View>
          <RightArrowIcon />
        </Pressable>
        <Pressable
          style={styles.socialLinkContainer}
          onPress={async () => Linking.openURL(Links.website)}
        >
          <View style={styles.socialIconsContainer}>
            <Image source={AboutUsIcon} style={styles.socialIcon} />
            <CustomText format="regular16">{translate("aboutUs")}</CustomText>
          </View>
          <RightArrowIcon />
        </Pressable>
        <Pressable
          style={styles.socialLinkContainer}
          onPress={async () => {
            await AsyncStorage.clear()
            await transact(async (wallet) => {
              await deauthorizeSession(wallet)
              navigation.navigate("Welcome")
            })
          }}
        >
          <View style={styles.socialIconsContainer}>
            <Image source={LogOutIcon} style={styles.socialIcon} />
            <CustomText format="regular16">{translate("logOut")}</CustomText>
          </View>
          <RightArrowIcon />
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen
