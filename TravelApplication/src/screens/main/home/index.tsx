import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { HOME_SCREEN_ICON_SIZE } from "~/config";
import { Camera, Community, History, Hotel, Restourant, Weather } from "#/icons";
import { COLORS } from "../../../utils/colors";
import HomeButton from "./components/HomeButton";
import { ScreenTitles } from "../../../utils/enums";


const Home = () => {
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
        console.log("camera")
        break;
      case ScreenTitles.Restaurant:
        console.log("restaurant")
        break;
      case ScreenTitles.History:
        console.log("history")
        break;
      case ScreenTitles.Community:

        break;
      case ScreenTitles.Hotel:

        break;
      case ScreenTitles.Weather:

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
