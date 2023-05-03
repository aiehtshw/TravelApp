import React, { useEffect, useState } from 'react';
import BottomNavigator from "./bottom/BottomNavigation";
import MainNavigator from "./authentication/AuthNavigation";
import AuthNavigation from "./authentication/AuthNavigation";
const RootMain = () => {
  const [haveLogin, setHaveLogin] = useState(false);
  return <BottomNavigator/>

};

export default RootMain;
