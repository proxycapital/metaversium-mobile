import { StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"

import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.shark,
    paddingBottom: 0,
  },
  supplyContainer: {
    backgroundColor: colors.tuna,
    borderRadius: scale(8),
    padding: scale(16),
    marginBottom: scale(12),
    flexDirection: "row",
    marginHorizontal: scale(16),
    justifyContent: "space-between",
    alignItems: "center",
  },
  supplyInfoContainer: {
    flexDirection: "row",
  },
  resourseImageContainer: {
    height: scale(64),
    width: scale(65),
    borderRadius: scale(8),
    backgroundColor: colors.abbey,
    marginRight: scale(16),
    justifyContent: "center",
    alignItems: "center",
  },
  resourseBalanceContainer: {
    paddingVertical: scale(2),
    justifyContent: "space-between",
  },
  resourseImage: {
    width: scale(48),
    height: scale(40),
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinsImage: {
    width: scale(32),
    height: scale(32),
    marginRight: scale(4),
  },
  addSupplyBtn: {
    borderWidth: 1,
    borderColor: colors.cornflower,
    borderRadius: scale(8),
    height: scale(40),
    width: scale(80),
    justifyContent: "center",
    alignItems: "center",
  },
  emptySupply: {
    marginTop: scale(16),
    alignItems: "center",
  },
})

export default styles
