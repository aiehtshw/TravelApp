import Login from "~/screens/authentication/login";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../routes";
import SignUp from "../../screens/authentication/signUp";


const StackMain = createStackNavigator();
const MainNavigator = () => {
  return (
    <StackMain.Navigator screenOptions={{ gestureEnabled: false, headerShown:false}}>
      <StackMain.Screen name={Routes.AuthStack.Login} component={Login}/>
      <StackMain.Screen name={Routes.AuthStack.SingUp} component={SignUp}/>
      <StackMain.Screen name={Routes.AuthStack.ForgotPassword} component={Login}/>
    </StackMain.Navigator>
  );
};

export default MainNavigator;
