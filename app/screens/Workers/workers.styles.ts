import { StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"

import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
  },
  background: {
    backgroundColor: colors.charade,
  },
  workerContainer: {
    borderRadius: scale(8),
    backgroundColor: colors.tuna,
    height: scale(180),
    paddingVertical: scale(16),
    width: "48%",
    marginBottom: scale(16),
  },
  workersContainer: {
    justifyContent: "space-between",
    paddingHorizontal: scale(16),
  },
  workerImage: {
    width: "100%",
    height: "100%",
    marginTop: scale(-10),
  },
  workerDescContainer: {
    paddingTop: scale(10),
    backgroundColor: colors.tuna,
    marginTop: scale(-33),
    paddingHorizontal: scale(16),
  },
  workerStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  workerStatus: {
    marginRight: scale(4),
    width: scale(8),
    height: scale(8),
    borderRadius: scale(8 / 2),
  },
  workerStatusFree: {
    backgroundColor: colors.aquaForest,
  },
  workerStatusNoFree: {
    backgroundColor: colors.selectiveYellow,
  },
})

export default styles
