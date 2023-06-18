import Login from "~/screens/authentication/login";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../routes";
import SignUp from "../../screens/authentication/signUp";
import { useAppSelector } from "../../redux/store";


const StackMain = createStackNavigator();
const MainNavigator = () => {
  const languageState = useAppSelector((state) => state.languageSlice);
  return (
    <StackMain.Navigator screenOptions={{ gestureEnabled: false, headerShown:false}}>
      <StackMain.Screen name={languageState.defaultLanguage.login} component={Login}/>
      <StackMain.Screen name={languageState.defaultLanguage.signUp} component={SignUp}/>
      <StackMain.Screen name={languageState.defaultLanguage.forgotPassword} component={Login}/>
    </StackMain.Navigator>
  );
};

export default MainNavigator;
