import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Hotel from "../hotels/components/Hotel";
import restourant from "./components/Restourant";
import { useAppSelector } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { fetchlistRestourant } from "../../../redux/reducers/restourant/listRestourantsSlice";
import { Daum, RestourantAPIResponse } from "../../../services/restourants/response";
import Hotels from "../hotels";
import { showLoading } from "../../../redux/reducers/loading/loadingSlice";


const Restaurant = () => {
  const dispatch = useDispatch();
  const [restourants,setRestourants] = useState<Daum[]>();
  const RestourantListState = useAppSelector((state) => state.listRestourantSlice);
  const generalState = useAppSelector((state) => state.generalSlice);

  useEffect(()=>{
    if(!RestourantListState.loading){
      setRestourants(RestourantListState.data)
    }
  },[RestourantListState.data])
  useEffect(()=>{
    if(restourants)
      dispatch(showLoading(false))
  },[restourants])
  const restaurantDetails = (item:any) => {

  }
  return(
    <>
      {
        !generalState.loading &&
      <FlatList
        data={restourants}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          item && item.name?
          <TouchableOpacity activeOpacity={0.9} onPress={ () => restaurantDetails(item) }>
            <Hotel
              hotel_name={item.name ? item.name : "Empty"}
              image = {item.photo ? item.photo.images.small.url: 'https://reactnative.dev/img/tiny_logo.png'}
              rank = {item.rating}
              description={item.description ? item.description:'We do not have any description'}
            />
          </TouchableOpacity>
        :<></>
        )}
      />
      }
      <View style={{height:50}}/>
    </>
  );
}
const styles = StyleSheet.create({

})
const axios = require('axios');




export default Restaurant;
