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
import { useAppSelector } from "../../redux/store";
const Stack = createStackNavigator();

const HomeNavigator = () => {
  const languageState = useAppSelector((state) => state.languageSlice);
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
      <Stack.Screen name={languageState.defaultLanguage.home} component={Home}/>
      <Stack.Screen name={languageState.defaultLanguage.Photography} component={Photography}/>
      <Stack.Screen name={languageState.defaultLanguage.Restaurant} component={Restaurant}/>
      <Stack.Screen name={languageState.defaultLanguage.History} component={History}/>
      <Stack.Screen name={languageState.defaultLanguage.Community} component={Community}/>
      <Stack.Screen name={languageState.defaultLanguage.Hotel} component={Hotels}/>
      <Stack.Screen name={languageState.defaultLanguage.Weather} component={Weather}/>

    </Stack.Navigator>
  );
}
export default HomeNavigator;
