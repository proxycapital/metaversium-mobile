import { StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"
import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
  levelsContainer: {
    flexDirection: "row",
  },
  levelText: {
    marginLeft: scale(4),
  },
  buildingsContainer: {
    justifyContent: "space-between",
    paddingHorizontal: scale(8),
  },
  buildingContainer: {
    borderRadius: scale(8),
    backgroundColor: colors.tuna,
    padding: scale(16),
    width: "48%",
    marginBottom: scale(16),
  },
  buildingImage: {
    height: scale(110),
    width: "100%",
  },
  resourceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: scale(8),
  },
  resourceImageContainer: {
    backgroundColor: colors.abbey,
    borderRadius: scale(8),
    width: scale(48),
    height: scale(48),
    paddingHorizontal: scale(6),
    paddingVertical: scale(9),
    marginRight: scale(8),
  },
  resourceImage: {
    width: "100%",
    height: "100%",
  },
  resourceTextContainer: {
    flexDirection: "row",
  },
  plusText: {
    marginRight: scale(2),
  },
})

export default styles
