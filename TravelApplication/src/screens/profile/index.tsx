import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text, TouchableOpacity,
  View
} from "react-native";
import ProfileInfo from "./components/profileInfo";
import HomeButton from "../main/home/components/HomeButton";
import { BackArrow, Camera, Community, Favorites, History, Location, Star } from "#/icons";
import { FirebaseAuthUtils } from "../../services/firebaseAuth/FirebaseAuthUtils";
import { useAppSelector } from "../../redux/store";

const Profile = () => {
  const meState = useAppSelector((state) => state.meSlice);
  const list = [
    {
      id: '1',
      icon: <Location width={30} height={30}/>,
      text: "Ankara",
      disable: true
    },
    {
      id: '2',
      icon: <Community  width={30} height={30}/>,
      text: "City Couch Community",
      disable: true
    },
    {
      id: '3',
      icon: <Camera width={30} height={30}/>,
      text: "Shared Photo",
      disable: true
    },
    {
      id: '4',
      icon: <History  width={30} height={30}/>,
      text: "Cultural Sharing",
      disable: true
    },
    {
      id: '5',
      icon: <Star width={30} height={30}/>,
      text: "Created Travel Path/Joined Travel Path",
      disable: true
    },
    {
      id: '6',
      icon: <Favorites width={30} height={30}/>,
      text: "Favorites",
      disable: false,
    },
    {
      id: '7',
      icon: <BackArrow width={30} height={30}/>,
      text: "LogOut",
      onPress: () => {
        FirebaseAuthUtils.logOut()
      },
      disable: false
    }
  ];

  let name = "Nejdet";
  let surname = "DALASLAN";
  let year = "2023";

  return (
    <SafeAreaView>
      <View style={{marginTop: 10, borderBottomWidth: 1, width: "100%"}}>
        <View style={{flexDirection: "row", justifyContent: "space-around", marginBottom: 20}}>
          <Image source={{uri: 'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg'}}
                 style={{height: 150, width: 150, borderBottomRightRadius: 30, borderTopLeftRadius: 30}} />
          <View style={{justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 30, fontWeight: "bold", color: "#000"}}>{meState.me.name}</Text>
            <Text style={{fontSize: 30, fontWeight: "bold", color: "#000"}}>{surname}</Text>
            <Text style={{fontSize: 14, fontWeight: "normal", color: "#000"}}>{year} Yılında Katıldı</Text>
          </View>
        </View>
      </View>
        <FlatList
          data={list}
          renderItem={
            ({ item,index }) => (
              <ProfileInfo icon={item.icon} text={item.text} disable={item.disable} onPress={item.onPress} index={index}/>
            )
          }
          keyExtractor={list => list.id}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default Profile
