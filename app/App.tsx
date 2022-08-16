import React, { Suspense } from "react"
import {
  View, ActivityIndicator, StyleSheet, AppState,
} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { ConnectionProvider } from "@solana/wallet-adapter-react"
import { clusterApiUrl, PublicKey, PublicKeyInitData } from "@solana/web3.js"
import { Cache, SWRConfig } from "swr"
import FlashMessage from "react-native-flash-message"

import { initLocalization } from "./localization"
import { RootNavigation } from "./navigation"

initLocalization()

const DEVNET_ENDPOINT = clusterApiUrl("devnet")

function cacheReviver(key: string, value: any) {
  if (key === "publicKey") {
    return new PublicKey(value as PublicKeyInitData)
  }
  return value
}

const STORAGE_KEY = "app-cache"

let initialCacheFetchPromise: Promise<void>
let initialCacheFetchResult: any
function asyncStorageProvider() {
  if (initialCacheFetchPromise == null) {
    initialCacheFetchPromise = AsyncStorage.getItem(STORAGE_KEY).then(
      (result) => {
        initialCacheFetchResult = result
      },
    )
    throw initialCacheFetchPromise
  }
  let storedAppCache
  try {
    storedAppCache = JSON.parse(initialCacheFetchResult, cacheReviver)
  } catch (e) {
    console.log(e)
  }
  const map = new Map(storedAppCache || [])
  initialCacheFetchResult = undefined

  function persistCache() {
    const appCache = JSON.stringify(Array.from(map.entries()))
    AsyncStorage.setItem(STORAGE_KEY, appCache)
  }

  AppState.addEventListener("change", (state) => {
    if (state !== "active") {
      persistCache()
    }
  })
  AppState.addEventListener("memoryWarning", () => {
    persistCache()
  })

  return map as Cache<any>
}

const App = () => (
  <ConnectionProvider endpoint={DEVNET_ENDPOINT}>
    <SafeAreaProvider>
      <Suspense
        fallback={(
          <View style={styles.loadingContainer}>
            <ActivityIndicator
              size="large"
              style={styles.loadingIndicator}
            />
          </View>
        )}
      >
        <SWRConfig value={{ provider: asyncStorageProvider }}>
          <RootNavigation />
          <FlashMessage position="top" />
        </SWRConfig>
      </Suspense>
    </SafeAreaProvider>
  </ConnectionProvider>
)

const styles = StyleSheet.create({
  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },
  loadingIndicator: {
    marginVertical: "auto",
  },
  shell: {
    backgroundColor: "red",
    height: "100%",
  },
})

export default App
