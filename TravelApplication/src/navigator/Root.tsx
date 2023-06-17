import React, { useEffect, useState } from 'react';
import BottomNavigator from "./bottom/BottomNavigation";
import MainNavigator from "./authentication/AuthNavigation";
import AuthNavigation from "./authentication/AuthNavigation";

import auth from '@react-native-firebase/auth';
import { callMe } from "../redux/reducers/me/meSlice";
import { useAppSelector } from "../redux/store";
import { useDispatch } from "react-redux";
import { FireBaseRealTimeDBUtils } from "../services/firebaseRealTimeDBUtils/FireBaseRealTimeDBUtils";

const RootMain = () => {
  const dispatch = useDispatch();
  const [haveLogin, setHaveLogin] = useState(false);
  const [user, setUser] = useState();
  const meState = useAppSelector((state) => state.meSlice);
  function onAuthStateChanged(user:any) {
    setUser(user);
    if(user)
      FireBaseRealTimeDBUtils.me(user.uid,(user:any)=> dispatch(callMe(user)))
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



