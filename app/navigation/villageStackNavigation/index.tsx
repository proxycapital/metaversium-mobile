import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Building } from "../../types"
import { VillageScreen, BuildingScreen } from "../../screens"

export type VillageStackParamList = {
  Village: undefined;
  Building: { buildingInfo: Building };
}

const Stack = createNativeStackNavigator<VillageStackParamList>()

export const VillageStackNavigation = () => (
  <Stack.Navigator
    initialRouteName="Village"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Village" component={VillageScreen} />
    <Stack.Screen name="Building" component={BuildingScreen} />
  </Stack.Navigator>
)
