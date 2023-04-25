import React from 'react';
import Background from "./src/components/background";
import { Text } from "react-native";
import { DEFAULT_LANGUAGE, Languages } from "./src/config";
import Login from "./src/screens/authentication/login";

function App(): JSX.Element {
  return (
   <Background>
    <Login/>
   </Background>
  );
}




export default App;
