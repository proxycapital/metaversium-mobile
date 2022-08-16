import { StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"

import colors from "../../styles/colors"

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.charade,
  },
  emptyBuildings: {
    marginTop: scale(16),
    alignItems: "center",
  },
  buildContainer: {
    backgroundColor: colors.tuna,
    height: scale(165),
    borderRadius: scale(8),
    marginBottom: scale(16),
    padding: scale(16),
    marginHorizontal: scale(16),
    flexDirection: "row",
  },
  buildImageContainer: {
    width: "50%",
  },
  levelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  levelText: {
    marginLeft: scale(4),
  },
  buildingImage: {
    height: "100%",
    width: "100%",
  },
  buildInfoContainer: {
    width: "50%",
    marginLeft: scale(12),
  },
  resourseUpgradeText: {
    marginTop: scale(8),
    marginBottom: scale(16),
  },
  resourcesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  resourceContainer: {
    marginLeft: scale(4),
    alignItems: "center",
  },
  resourceImageContainer: {
    width: scale(32),
    height: scale(32),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale(8),
    backgroundColor: colors.abbey,
    padding: scale(4),
    marginRight: scale(4),
    marginBottom: scale(8),
  },
  resourceImage: {
    height: "100%",
    width: "100%",
  },
  resourceText: {
    marginTop: scale(-4),
  },
})

export default styles
