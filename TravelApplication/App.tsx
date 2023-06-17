import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/navigator/Root";
import axios from 'axios';
import { Provider } from "react-redux";
import store from "./src/redux/store";
import DefLoading from "./src/components/loading";

function App(): JSX.Element {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <DefLoading  />
      <Root/>
    </NavigationContainer>
    </Provider>
  );
}




export default App;
