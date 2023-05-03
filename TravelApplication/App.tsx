import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/navigator/Root";

function App(): JSX.Element {
  return (

    <NavigationContainer>
      <Root/>
    </NavigationContainer>
  );
}




export default App;
