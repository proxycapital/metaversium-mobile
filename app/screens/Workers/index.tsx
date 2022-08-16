import React, { useEffect, useState, useCallback } from "react"
import { View, Pressable, FlatList } from "react-native"
import { scale } from "react-native-size-matters"
import { useNavigation } from "@react-navigation/native"
import { transact } from "@solana-mobile/mobile-wallet-adapter-protocol-web3js"
import { useConnection } from "@solana/wallet-adapter-react"
import {
  PublicKey,
  RpcResponseAndContext,
  SignatureResult,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js"
import { TextEncoder } from "text-encoding"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import FastImage from "react-native-fast-image"
import { showMessage, hideMessage } from "react-native-flash-message"

// only for demo solution
import NftHunter from "../../assets/nftHunter.png"
import nftEngineer from "../../assets/nftEngineer.png"
import nftKnight from "../../assets/nftKnight.png"
import nftWizard from "../../assets/nftWizard.png"

import { RootStackParamList } from "../../navigation"
import { translate } from "../../localization"
import {
  CustomHeader, CustomText, CustomSwitch, ConfirmTxModal,
} from "../../components"
import colors from "../../styles/colors"
import { Worker } from "../../types"
import useAuthorization from "../../utils/useAuthorization"
import styles from "./workers.styles"

const Options = {
  all: "all",
  available: "available",
  busy: "busy",
} as const

type SwitchOptions = typeof Options[keyof typeof Options]

const mockWorkers = [{
  id: 1,
  name: "Cameron",
  status: "working",
  // will be stone | wood | iron
  currentWork: "woodFarming",
  image: NftHunter,
}, {
  id: 5,
  name: "Floyd Miles",
  status: "working",
  // will be stone | wood | iron
  currentWork: "woodFarming",
  image: nftEngineer,
}, {
  id: 2,
  name: "Cody",
  status: "free",
  // will be stone | wood | iron
  currentWork: "woodFarming",
  image: nftKnight,
}, {
  id: 3,
  name: "Fisher",
  status: "free",
  // will be stone | wood | iron
  currentWork: "woodFarming",
  image: nftWizard,
}, {
  id: 4,
  name: "Worker4",
  status: "working",
  // will be stone | wood | iron
  currentWork: "woodFarming",
  image: nftWizard,
}]

type WorkerScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>

interface WorkerComponentProps extends Worker {
  navigation: WorkerScreenNavigationProp,
  onLongPress: () => void,
}

const WorkerComponent = ({
  name, status, currentWork, image, navigation, onLongPress,
}: WorkerComponentProps) => (
  <Pressable
    style={styles.workerContainer}
    onLongPress={onLongPress}
    onPress={() => navigation.navigate("Worker", {
      workerInfo: {
        name, status, currentWork, image,
      },
    })}
  >
    <FastImage source={image} style={styles.workerImage} />
    <View style={styles.workerDescContainer}>
      <CustomText format="regular16">{name}</CustomText>
      <View style={styles.workerStatusContainer}>
        <View style={[styles.workerStatus, status === "free" ? styles.workerStatusFree : styles.workerStatusNoFree]} />
        <CustomText color={colors.bombay} format="regular12">{status !== "free" ? translate(currentWork) : translate("available")}</CustomText>
      </View>
    </View>
  </Pressable>
)

const WorkersScreen = () => {
  const [activeOption, setActiveOption] = useState<SwitchOptions>(Options.all)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [workersData, setWorkersData] = useState(mockWorkers)
  const navigation = useNavigation<WorkerScreenNavigationProp>()
  const { authorizeSession, selectedAccount } = useAuthorization()
  const { connection } = useConnection()

  const runFakeFarmTx = async () => {
    const message = "Farm from Metaversium"
    try {
      const result = await recordMessageGuarded(
        new TextEncoder().encode(message) as Buffer,
      )
      if (result) {
        const [signature, response] = result
        const {
          value: { err },
        } = response
        if (err) {
          showMessage({ message: translate("txFailed"), type: "danger" })
          console.log(err)
          return
        }
        showMessage({ message: translate("txSuccess"), type: "success" })
        console.log(signature)
      }
    } catch (e) {
      console.log(e)
      showMessage({ message: translate("txFailed"), type: "danger" })
    }
  }

  const recordMessageGuarded = useCallback(
    async (
      messageBuffer: Buffer,
    ): Promise<[string, RpcResponseAndContext<SignatureResult>]> => {
      const [signature] = await transact(async (wallet) => {
        const [freshAccount, latestBlockhash] = await Promise.all([
          authorizeSession(wallet),
          connection.getLatestBlockhash({
            // FIXME(#199): `fakewallet` always simulates transactions at `finalized` commitment
            commitment: "finalized",
          }),
        ])
        const memoProgramTransaction = new Transaction({
          ...latestBlockhash,
          feePayer:
            // Either the public key that was already selected when this method was called...
            selectedAccount?.publicKey
            // ...or the newly authorized public key.
            ?? freshAccount.publicKey,
        }).add(
          new TransactionInstruction({
            data: messageBuffer,
            keys: [],
            programId: new PublicKey(
              "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr",
            ),
          }),
        )
        return wallet.signAndSendTransactions({
          transactions: [memoProgramTransaction],
        })
      })
      return [signature, await connection.confirmTransaction(signature)]
    },
    [authorizeSession, connection, selectedAccount],
  )

  useEffect(() => {
    switch (activeOption) {
      case Options.all:
        setWorkersData([...mockWorkers])
        break
      case Options.available:
        setWorkersData([...mockWorkers.filter((worker) => worker.status === "free")])
        break
      case Options.busy:
        setWorkersData([...mockWorkers.filter((worker) => worker.status === "working")])
        break
      default:
        setWorkersData([...mockWorkers])
    }
  }, [activeOption])

  return (
    <FlatList
      ListHeaderComponent={() => (
        <>
          <CustomHeader
            height={scale(54)}
            withBackBtn
            navigationHeader={translate("workers")}
          />
          <CustomSwitch
            active={activeOption}
            options={Object.values(Options)}
            toggleSwitch={setActiveOption}
          />
        </>
      )}
      ListFooterComponent={() => (
        <ConfirmTxModal
          isVisible={isModalVisible}
          hideModal={() => setIsModalVisible(false)}
          onConfirm={runFakeFarmTx}
        />
      )}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.workersContainer}
      style={styles.background}
      numColumns={2}
      data={workersData}
      renderItem={(({ item }) => (
        <WorkerComponent
          {...item}
          navigation={navigation}
          onLongPress={() => setIsModalVisible(true)}
        />
      ))}
      ListEmptyComponent={() => <CustomText format="bold20">{translate("noWorkers")}</CustomText>}
    />
  )
}

export default WorkersScreen
