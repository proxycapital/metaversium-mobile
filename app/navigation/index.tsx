import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { WelcomeScreen, WorkerScreen, WorkersScreen } from "../screens"
import { BottomTabsNavigation } from "./bottomTabs"
import { Worker } from "../types"

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Workers: undefined;
  Worker: { workerInfo: Worker };
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={BottomTabsNavigation} />
      {/* as we used it from multiply bottom tabs */}
      <Stack.Screen name="Workers" component={WorkersScreen} />
      <Stack.Screen name="Worker" component={WorkerScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)
