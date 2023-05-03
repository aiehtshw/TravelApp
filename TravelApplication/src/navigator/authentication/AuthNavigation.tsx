import Login from "~/screens/authentication/login";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../routes";


const StackMain = createStackNavigator();
const MainNavigator = () => {
  return (
    <StackMain.Navigator screenOptions={{ gestureEnabled: false }}>
      <StackMain.Screen name={Routes.AuthStack.Login} component={Login}/>
    </StackMain.Navigator>
  );
};

export default MainNavigator;
