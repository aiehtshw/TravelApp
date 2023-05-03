import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../../screens/profile";
import { Routes } from "../routes";
import { HomeIcon, ProfileIcon } from "#/icons";
import { COLORS } from "~/utils/colors";
import HomeNavigator from "../main/HomeNavigator";

const Tabs = createBottomTabNavigator();
const BottomNavigator = () => {

  return(
    <Tabs.Navigator
    screenOptions={{
      headerShown:false,
      tabBarHideOnKeyboard: true,
      tabBarActiveTintColor: COLORS.home_restaurant_bg,
      tabBarInactiveTintColor: COLORS.navigator_tint,
      tabBarActiveBackgroundColor: COLORS.navigator_color,
      tabBarInactiveBackgroundColor: COLORS.navigator_color,}}
    >
      <Tabs.Screen
        options={{
        tabBarIcon: ({ color, size }) => <HomeIcon width={20} height={20} fill={color} />
        }}
        name={Routes.BottomStack.Home}
        component={HomeNavigator}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => <ProfileIcon width={20} height={20} fill={color} />
        }}
        name={Routes.BottomStack.Profile}
        component={Profile}
      />
    </Tabs.Navigator>
  );
}
export default BottomNavigator;
