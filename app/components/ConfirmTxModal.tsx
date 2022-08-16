import React from "react"
import {
  Pressable, View, Modal, StyleSheet,
} from "react-native"
import { scale } from "react-native-size-matters"

import colors from "../styles/colors"
import { translate } from "../localization"
import CustomButton from "./CustomButton"
import CustomText from "./CustomText"

interface ConfirmTxModalProps {
  isVisible: boolean,
  hideModal: () => void,
  onConfirm: () => void,
}

const ConfirmTxModal = ({ isVisible, hideModal, onConfirm }: ConfirmTxModalProps) => (
  <Modal
    transparent
    visible={isVisible}
    onRequestClose={hideModal}
  >
    <Pressable style={styles.modalContainer} onPress={hideModal}>
      <View style={styles.modal}>
        <CustomText format="bold16">{translate("confirm")}</CustomText>
        <CustomText
          center
          color={colors.bombay}
          format="regular12"
          containerStyle={styles.modalDescText}
        >
          {translate("confirmTxDesc")}
        </CustomText>
        <View style={styles.modalButtonsContainer}>
          <CustomButton containerStyle={{ ...styles.modalCancelButton, ...styles.modalButtonContainer }} onClick={hideModal}>{translate("cancel")}</CustomButton>
          <CustomButton
            containerStyle={styles.modalButtonContainer}
            onClick={() => {
              onConfirm()
              hideModal()
            }}
          >
            {translate("farm")}

          </CustomButton>
        </View>
      </View>
    </Pressable>
  </Modal>
)

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.tuna,
    width: "80%",
    borderRadius: scale(16),
    padding: scale(16),
  },
  modalDescText: {
    marginTop: scale(8),
    marginBottom: scale(28),
  },
  modalButtonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButtonContainer: {
    height: scale(40),
    width: "48%",
    borderRadius: scale(12),
  },
  modalCancelButton: {
    borderWidth: scale(2),
    borderColor: colors.cornflower,
    backgroundColor: "none",
  },
})

export default ConfirmTxModal
