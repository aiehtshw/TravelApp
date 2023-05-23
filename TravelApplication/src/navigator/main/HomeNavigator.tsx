import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../routes";
import Login from "../../screens/authentication/login";
import Home from "../../screens/main/home";
import Hotels from "../../screens/main/hotels";
import Photography from "../../screens/main/photography";
import Restaurant from "../../screens/main/restaurant";
import Community from "../../screens/main/community";
import History from "../../screens/main/history";
import Weather from "../../screens/main/weather";
import { COLORS } from "../../utils/colors";
const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={({ route }) => ({
      //tabBarShowLabel: false,
      /*tabBarLabel: ({ focused }) => {
        return <Text style={{fontSize: 14, fontWeight: '600'}}>{focused ? "." : ""}</Text>
      }, */
      headerShown:true,
      headerTitleAlign: 'center',headerTintColor: COLORS.white,backgroundColor:COLORS.navigator_color,headerStyle: {
        backgroundColor: COLORS.navigator_color
      },

      gestureEnabled: false
    })}>
      <Stack.Screen name={Routes.HomeStack.Home} component={Home}/>
      <Stack.Screen name={Routes.HomeStack.Photography} component={Photography}/>
      <Stack.Screen name={Routes.HomeStack.Restaurant} component={Restaurant}/>
      <Stack.Screen name={Routes.HomeStack.History} component={History}/>
      <Stack.Screen name={Routes.HomeStack.Community} component={Community}/>
      <Stack.Screen name={Routes.HomeStack.Hotel} component={Hotels}/>
      <Stack.Screen name={Routes.HomeStack.Weather} component={Weather}/>

    </Stack.Navigator>
  );
}
export default HomeNavigator;
