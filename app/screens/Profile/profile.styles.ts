import { StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"

import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
  profileContainer: {
    paddingTop: scale(20),
    justifyContent: "center",
    alignItems: "center",
  },
  avatarContainer: {
    marginTop: scale(24),
    marginBottom: scale(18),
  },
  balanceContainer: {
    backgroundColor: colors.shark,
    flexDirection: "row",
    borderBottomColor: colors.cornflower,
    borderBottomWidth: 1,
    borderTopColor: colors.cornflower,
    borderTopWidth: 1,
    height: scale(64),
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(24),
    marginBottom: scale(24),
    marginTop: scale(16),
  },
  balanceSolContainer: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  balanceText: {
    marginLeft: scale(4),
  },
  socialLinksContainer: {
    paddingHorizontal: scale(24),
  },
  socialLinkContainer: {
    paddingHorizontal: scale(16),
    height: scale(55),
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: colors.abbey,
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  socialIconsContainer: {
    flexDirection: "row",
  },
  socialIcon: {
    marginRight: scale(8),
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addressText: {
    marginRight: scale(4),
  },
})

export default styles
