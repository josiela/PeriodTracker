import React, { useState } from "react";
import SwipeNavigation from "../SwipeNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

// Our Screen Imports
import InfoTextScreen from "../../screens/InfoTextScreen";
import ChangePWScreen from "../../screens/ChangePWScreen";
import MensCycleChangeScreen from "../../screens/MensCycleChangeScreen";
import AboutUsScreen from "../../screens/AboutUsScreen";
import InfoWOButtScreen from "../../screens/InfoWOButtScreen";
import SettingsScreen from "../../screens/SettingsScreen";
import IndexCal from "../../screens/IndexCal";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
 
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     
      <Stack.Screen name="Home" component={SwipeNavigation} />
      
    </Stack.Navigator>


  ); 
};

export default StackNavigation;


