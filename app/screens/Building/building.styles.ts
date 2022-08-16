import { StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"

import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
  paddingHorizontal: {
    paddingHorizontal: scale(16),
  },
  buildingImageContainer: {
    paddingHorizontal: scale(8),
    marginBottom: scale(-50),
    marginTop: scale(-40),
    zIndex: -1,
  },
  buildingImage: {
    width: "100%",
    height: scale(356),
  },
  buildingRateContainer: {
    backgroundColor: colors.shark,
    borderTopColor: colors.cornflowerBlue,
    borderBottomColor: colors.cornflowerBlue,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: scale(88),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: scale(16),
    marginTop: scale(32),
  },
  resourceImage: {
    width: scale(72),
    height: scale(55),
    marginRight: scale(12),
  },
  farmBtnContainer: {
    paddingHorizontal: scale(16),
    marginBottom: scale(24),
  },
  levelLabel: {
    marginTop: scale(16),
    marginBottom: scale(16),
  },
  requiredResourses: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: scale(16),
  },
  requiredResourse: {
    width: "30%",
    backgroundColor: colors.tuna,
    borderRadius: scale(8),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: scale(13),
  },
  requireResourseImage: {
    width: scale(48),
    height: scale(38),
    marginBottom: scale(5),
  },
  requiredAmountContainer: {
    flexDirection: "row",
  },
  moneyImage: {
    height: scale(24),
    width: scale(24),
  },
  upgradeButton: {
    backgroundColor: colors.aquaForest,
    marginBottom: scale(16),
  },
})

export default styles
