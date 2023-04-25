import React from "react";
import { FlatList, StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import Hotel from "./components/Hotel";

const Hotels = () => {
  const temp = [
    {
      hotel_name: "Hotel 1",
      total_vote_count: 100,
      total_vote:900,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      hotel_name: "Hotel 2",
      total_vote_count: 100,
      total_vote:900,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      hotel_name: "Hotel 3",
      total_vote_count: 100,
      total_vote:900,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]

  const hotelDetail = ( hotel:any ) => {
    console.log(hotel.hotel_name);
  }
  return(
    <>
      <FlatList
        data={temp}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.9} onPress={ () => hotelDetail(item) }>
            <Hotel
              hotel_name={item.hotel_name}
              total_vote_count={item.total_vote_count}
              total_vote={item.total_vote}
              description={item.description}
            />
          </TouchableOpacity>

        )}
      />
      <View style={{height:50}}/>
    </>

  );
};

const styles = StyleSheet.create({

})

export default Hotels;
