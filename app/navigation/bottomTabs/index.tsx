import React from "react"
import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { scale } from "react-native-size-matters"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import {
  VillageIcon, BuildIcon, JobsIcon, SupplyIcon, ProfileIcon,
} from "../../assets/icons"
import { translate } from "../../localization"
import {
  SupplyScreen, WorkersScreen, ProfileScreen,
} from "../../screens"
import { VillageStackNavigation } from "../villageStackNavigation"
import { BuildStackNavigation } from "../buildStackNavigation"
import colors from "../../styles/colors"

export type BottomTabsParamList = {
  VillageStack: undefined;
  Supply: undefined;
  Jobs: undefined;
  Build: undefined;
  Profile: undefined;
}

const Tab = createBottomTabNavigator<BottomTabsParamList>()

export const BottomTabsNavigation = () => {
  const insets = useSafeAreaInsets()

  return (
    <Tab.Navigator
      initialRouteName="VillageStack"
      screenOptions={
        {
          headerShown: false,
          tabBarActiveTintColor: colors.white,
          tabBarStyle: { ...styles.tabBarStyle, height: scale(50 + insets.bottom) },
          tabBarLabelStyle: { ...styles.tabBatLabelStyle },
        }
      }
    >
      <Tab.Screen
        options={{
          unmountOnBlur: true,
          tabBarLabel: translate("village"),
          tabBarIcon: ({ focused }) => (
            <VillageIcon
              opacity={focused ? 1 : 0.76}
              fillColor={focused ? colors.cornflower : colors.frenchGray}
            />
          ),
        }}
        name="VillageStack"
        component={VillageStackNavigation}
      />
      <Tab.Screen
        options={{
          tabBarLabel: translate("supply"),
          tabBarIcon: ({ focused }) => (
            <SupplyIcon
              opacity={focused ? 1 : 0.76}
              fillColor={focused ? colors.cornflower : colors.frenchGray}
            />
          ),
        }}
        name="Supply"
        component={SupplyScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: translate("build"),
          tabBarIcon: ({ focused }) => (
            <BuildIcon
              opacity={focused ? 1 : 0.76}
              fillColor={focused ? colors.cornflower : colors.frenchGray}
            />
          ),
        }}
        name="BuildNew"
        component={BuildStackNavigation}
      />
      <Tab.Screen
        options={{
          tabBarLabel: translate("jobs"),
          tabBarIcon: ({ focused }) => (
            <JobsIcon
              opacity={focused ? 1 : 0.76}
              fillColor={focused ? colors.cornflower : colors.frenchGray}
            />
          ),
        }}
        name="Jobs"
        component={WorkersScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: translate("profile"),
          tabBarIcon: ({ focused }) => (
            <ProfileIcon
              opacity={focused ? 1 : 0.76}
              fillColor={focused ? colors.cornflower : colors.frenchGray}
            />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBatLabelStyle: {
    paddingBottom: scale(5),
    fontSize: scale(10),
  },
  tabBarStyle: {
    backgroundColor: colors.charade,
    height: scale(150),
    borderTopWidth: 0,
  },
})
