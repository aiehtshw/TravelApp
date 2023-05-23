import React, { useEffect, useState } from 'react';
import BottomNavigator from "./bottom/BottomNavigation";
import MainNavigator from "./authentication/AuthNavigation";
import AuthNavigation from "./authentication/AuthNavigation";

import auth from '@react-native-firebase/auth';

const RootMain = () => {
  const [haveLogin, setHaveLogin] = useState(false);
  const [user, setUser] = useState();

  function onAuthStateChanged(user:any) {
    setUser(user);
    setHaveLogin(true);
  }

  useEffect(() => {
    console.log(haveLogin);
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return user  ? <BottomNavigator/>
                    : <AuthNavigation/>

};

export default RootMain;



