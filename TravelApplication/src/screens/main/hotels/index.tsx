import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import Hotel from "./components/Hotel";
import { useDispatch } from "react-redux";
import { showLoading } from "../../../redux/reducers/loading/loadingSlice";
import RBSheet from "react-native-raw-bottom-sheet";
import { COLORS } from "../../../utils/colors";
import { RFValue } from "react-native-responsive-fontsize";
import { Daum } from "../../../services/hotels/response";
import { useAppSelector } from "../../../redux/store";

const Hotels = () => {
  const dispatch = useDispatch();
  const popUpRef = useRef();
  const [selected,setSelected] = useState<Daum>({});
  const initialState = useRef(false);
  const [hotels,setHotels] = useState<Daum[]>();
  const hotelState = useAppSelector((state) => state.hotelListSlice);
  useEffect(()=>{
    if(!hotelState.loading){
      setHotels(hotelState.data)
    }
  },[hotelState.data])
  useEffect(()=>{
    if(hotels)
      dispatch(showLoading(false))
  },[hotels])
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
  useEffect(()=>{
    dispatch(showLoading(false))
  },[])

  const hotelDetail = ( hotel:any ) => {
    initialState.current = true;
    setSelected(hotel)
    popUpRef.current.open();
  }
  const whenPopUpClosed = () => {
    setSelected({});

    initialState.current=false;
  }
  return(
    <>
      <FlatList
        data={hotels}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.9} onPress={ () =>  hotelDetail(item)}>
            <Hotel
              image={item.photo ? item.photo.images.small.url: 'https://reactnative.dev/img/tiny_logo.png'}
              hotel_name={item.name ? item.name : "Empty"}
              rank={item.rating}
              total_vote={item.raw_ranking}
              description={item.price + "\n" + item.ranking}
            />
          </TouchableOpacity>

        )}
      />
      <View style={{height:50}}/>

      <RBSheet
        ref={popUpRef}
        height={700}
        openDuration={250}
        closeDuration={350}
        dragFromTopOnly={true}
        closeOnDragDown={true}
        onClose={whenPopUpClosed}
        customStyles={{
          container: {

            alignItems: "center",
            borderTopRightRadius:20,
            borderTopLeftRadius:20,
          },
          wrapper: {
          },
          draggableIcon: {
            height:4,
            width:35,
            borderRadius:10,
            backgroundColor: '#000',
          },
        }}
      >


      </RBSheet>
    </>

  );
};

const styles = StyleSheet.create({
  popUpContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.background,
  },
  container: {
    width:'90%',
    alignSelf:"center",
  },
  upSide: {
    marginTop:15,
    height:200,
    alignContent:'center',
    width: '100%',
    flexDirection:'row'
  },
  poster_image: {
    justifyContent:'center',
    width: '50%',
  },
  movie_info: {
    width: '50%',
  },
  info_container: {
    width:'90%'
  },
  title: {
    fontWeight:'bold',
    alignSelf: 'flex-start',
    fontSize:RFValue(18)
  },
  detailes: {
    marginTop: 5,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
  },
  vote_container: {
    width:35,
    height: 35,
    borderRadius:35,
    backgroundColor:COLORS.point_circle,
    justifyContent:'center',
    alignItems:'center'
  },
  vote_average: {
    color:COLORS.white,
    fontSize: RFValue(10)
  }
})

export default Hotels;
