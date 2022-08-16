import { StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"

import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
  workerImageContainer: {
    alignItems: "center",
    marginBottom: scale(16),
    height: scale(300),
  },
  workerStatusContainer: {
    paddingHorizontal: scale(16),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scale(16),
  },
  workerIcon: {
    marginRight: scale(8),
  },
  finishBtnContainer: {
    marginVertical: scale(16),
    backgroundColor: colors.shark,
    borderWidth: 1,
    borderColor: colors.cornflower,
  },
  buttonsContainer: {
    paddingHorizontal: scale(16),
  },
  unclaimedContainer: {
    borderBottomColor: colors.cornflower,
    borderBottomWidth: 1,
    borderTopColor: colors.cornflower,
    borderTopWidth: 1,
    height: scale(83),
    backgroundColor: colors.shark,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: scale(16),
  },
  resourseImage: {
    width: scale(64),
    height: scale(50),
    marginRight: scale(16),
  },
  balanceContainer: {
    flexDirection: "row",
  },
  balanceResourse: {
    marginLeft: scale(4),
  },
  workerImage: {
    width: "100%",
    height: "100%",
  },
})

export default styles
