import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/main/home";
import Profile from "../../screens/profile";
import { Routes } from "../routes";
import { HomeIcon, ProfileIcon } from "#/icons";
import { COLORS } from "~/utils/colors";

const Tabs = createBottomTabNavigator();
const BottomNavigator = () => {

  return(
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        //tabBarShowLabel: false,
        /*tabBarLabel: ({ focused }) => {
          return <Text style={{fontSize: 14, fontWeight: '600'}}>{focused ? "." : ""}</Text>
        }, */
        headerTitleAlign: 'center',headerTintColor: COLORS.white,backgroundColor:COLORS.navigator_color,headerStyle: {
          backgroundColor: COLORS.navigator_color
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.home_restaurant_bg,
        tabBarInactiveTintColor: COLORS.navigator_tint,
        tabBarActiveBackgroundColor: COLORS.navigator_color,
        tabBarInactiveBackgroundColor: COLORS.navigator_color,
      })}
    >
      <Tabs.Screen
        options={{
        tabBarIcon: ({ color, size }) => <HomeIcon width={20} height={20} fill={color} />
        }}
        name={Routes.BottomStack.Home}
        component={Home}
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
