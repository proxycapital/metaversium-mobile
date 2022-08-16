import { StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"

import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(16),
    backgroundColor: colors.shark,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  quickLookContainer: {
    marginTop: scale(24),
    backgroundColor: colors.shark,
    borderWidth: scale(1),
    borderColor: colors.cornflower,
    marginBottom: scale(60),
  },
  header: {
    marginTop: scale(32),
  },
  subHeader: {
    marginTop: scale(24),
  },
})

export default styles
