import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { HOME_SCREEN_ICON_SIZE } from "~/config";
import { Camera, Community, History, Hotel, Restourant, Weather } from "#/icons";
import { COLORS } from "../../../utils/colors";
import HomeButton from "./components/HomeButton";
import { ScreenTitles } from "../../../utils/enums";
import { Routes } from "../../../navigator/routes";


const Home = ({navigation}) => {
  const box = [
    {
      id: '1',
      title: ScreenTitles.Camera,
      icon: <Camera width={HOME_SCREEN_ICON_SIZE} height={HOME_SCREEN_ICON_SIZE}/>,
      background: COLORS.home_camera_bg,
    },
    {
      id: '2',
      title: ScreenTitles.Restaurant,
      icon: <Restourant width={HOME_SCREEN_ICON_SIZE} height={HOME_SCREEN_ICON_SIZE}/>,
      background: COLORS.home_restaurant_bg
    },
    {
      id: '3',
      title: ScreenTitles.History,
      icon: <History width={HOME_SCREEN_ICON_SIZE} height={HOME_SCREEN_ICON_SIZE}/>,
      background: COLORS.home_history_bg
    },
    {
      id: '4',
      title: ScreenTitles.Community,
      icon: <Community width={HOME_SCREEN_ICON_SIZE} height={HOME_SCREEN_ICON_SIZE}/>,
      background: COLORS.home_community_bg
    },
    {
      id: '5',
      title: ScreenTitles.Hotel,
      icon: <Hotel width={HOME_SCREEN_ICON_SIZE} height={HOME_SCREEN_ICON_SIZE}/>,
      background: COLORS.home_hotel_bg
    },
    {
      id: '6',
      title: ScreenTitles.Weather,
      icon: <Weather width={HOME_SCREEN_ICON_SIZE} height={HOME_SCREEN_ICON_SIZE}/>,
      background: COLORS.home_weather_bg
    },
  ];
  const homeNavigator = (title: string) => {
    switch (title){
      case ScreenTitles.Camera:
        navigation.navigate(Routes.HomeStack.Photography)
        break;
      case ScreenTitles.Restaurant:
        navigation.navigate(Routes.HomeStack.Restaurant)
        break;
      case ScreenTitles.History:
        navigation.navigate(Routes.HomeStack.History)
        break;
      case ScreenTitles.Community:
        navigation.navigate(Routes.HomeStack.Community)
        break;
      case ScreenTitles.Hotel:
        navigation.navigate(Routes.HomeStack.Hotel)
        break;
      case ScreenTitles.Weather:
        navigation.navigate(Routes.HomeStack.Weather)
        break;
    }
  }
  return (
    <View>
      <FlatList
        columnWrapperStyle={styles.row}
        data={box}
        numColumns={2}
        renderItem={
          ({ item }) => (
              <HomeButton item={item} onPress={() => homeNavigator(item.title)}/>
          )
        }
        keyExtractor={box => box.id}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: "space-around",
    backgroundColor: "gray",

  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  }
})

export default Home;

