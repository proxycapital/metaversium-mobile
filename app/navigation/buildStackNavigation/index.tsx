import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { BuildScreen, BuildingScreen } from "../../screens"

export type BuildeStackParamList = {
  Build: undefined;
  Building: undefined;
}

const Stack = createNativeStackNavigator<BuildeStackParamList>()

export const BuildStackNavigation = () => (
  <Stack.Navigator
    initialRouteName="Build"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Build" component={BuildScreen} />
    <Stack.Screen name="Building" component={BuildingScreen} />
  </Stack.Navigator>
)
