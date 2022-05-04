import React, { useState } from "react";
import { View, StyleSheet, TextInput, Pressable } from "react-native";
import colors from "../constants/colors";
import IndexCal from "../screens/IndexCal";
import SettingsScreen from "../screens/SettingsScreen";
import ChoosePwScreen from "../screens/ChoosePwScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const SwipeNavigation = (props) => {
  return (
    <Tab.Navigator
      style={{ backgroundColor: colors.mainLG }}
      tabBarPosition={"bottom"}
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.mainLG },
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: "transparent",
        },
        tabBarIconStyle: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarItemStyle: {
          //color of item-object
          backgroundColor: "transparent",
          width: 30,
          paddingHorizontal: 1,
        },
        tabBarContentContainerStyle: {
          //total backgroundcolor of bar
          backgroundColor: "transparent",
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={IndexCal}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: focused ? "#493d8a" : "#748c94",
              }}
            />
          ),
          tabBarIconStyle: {
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: focused ? "#493d8a" : "#748c94",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Seite3"
        component={ChoosePwScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: focused ? "#493d8a" : "#748c94",
              }}
            />
          ),
          tabBarIconStyle: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default SwipeNavigation;