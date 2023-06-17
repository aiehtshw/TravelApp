import React, { useEffect, useRef, useState } from "react";
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
import { BackArrow, Camera, Community, Favorites, Gallery, History, Location, Photo, Star } from "#/icons";
import { FirebaseAuthUtils } from "../../services/firebaseAuth/FirebaseAuthUtils";
import { useAppSelector } from "../../redux/store";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { showLoading } from "../../redux/reducers/loading/loadingSlice";
import { useDispatch } from "react-redux";
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { DEFAULT_LANGUAGE, Devices, Languages } from "../../config";
import { FireBaseRealTimeDBUtils } from "../../services/firebaseRealTimeDBUtils/FireBaseRealTimeDBUtils";
import { callMe } from "../../redux/reducers/me/meSlice";
import { COLORS } from "../../utils/colors";
import RBSheet from "react-native-raw-bottom-sheet";
import tr from "../../utils/languages/locales/tr";
const Profile = () => {
  const meState = useAppSelector((state) => state.meSlice);
  const languageState = useAppSelector((state) => state.languageSlice);
  const[userPhoto,setUserPhoto] = useState(meState && meState.me && meState.me.profilePhoto !=="" ? meState.me.profilePhoto  :'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg');
  const list = [
    {
      id: '1',
      icon: <Location width={30} height={30}/>,
      text: meState.me.city,
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
  const dispatch = useDispatch();
  const refRBSheet = useRef();
  useEffect(()=>{
    setUserPhoto(meState.me.profilePhoto)
    dispatch(showLoading(false))
  },[meState.me])

 /*
  const updatePhoto = (file:any)=>{
    dispatch(showLoading(true))
    setTimeout(function(){
      //do what you need here
      dispatch(
        fetchFileUpload({
          code: meState.patient.patientUserCode,
          description:"",
          type:"profile",
          files:file
        }))
    }, 2000);

  }
*/
  const imageGalleryLaunch = () => {
    let options = {
      includeBase64:true,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    launchImageLibrary(options, (res) => {
      refRBSheet.current.close();
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
      } else {
        dispatch(showLoading(true))
        FireBaseRealTimeDBUtils.uploadProfilePhoto(meState.me.uid,res.assets[0].base64,(success)=>{
          FireBaseRealTimeDBUtils.me(meState.me.uid,(user:any)=> dispatch(callMe(user)))
        });
      }
    });
  };

  const imageCameraLaunch = () => {
    let options = {
      includeBase64:true,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    launchCamera(options, (response) => {
      refRBSheet.current.close();
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        dispatch(showLoading(true))
        FireBaseRealTimeDBUtils.uploadProfilePhoto(meState.me.uid,response.assets[0].base64,(success)=>{
          FireBaseRealTimeDBUtils.me(meState.me.uid,(user:any)=> dispatch(callMe(user)))
        });
      }
    });
  };


  const checkGalleryPermission= ()=>{
    //
    if(Devices.OS === 'ios' ){
      imageGalleryLaunch();

    } else {
      request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
        .then((result) => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              console.log('This feature is not available (on this device / in this context)');
              break;
            case RESULTS.DENIED:
              console.log('The permission has not been requested / is denied but requestable');
              break;
            case RESULTS.LIMITED:
              imageGalleryLaunch();
              console.log('The permission is limited: some actions are possible');
              break;
            case RESULTS.GRANTED:
              imageGalleryLaunch();
              console.log('The permission is granted');
              break;
            case RESULTS.BLOCKED:
              console.log('The permission is denied and not requestable anymore');
              break;
          }
        })
        .catch((error) => {
        });
    }
  }

  const checkCameraPermission= ()=>{
    //refRBSheet.current.close();
    if(Devices.OS === 'ios' ){
      imageCameraLaunch();
    } else {
      request(PERMISSIONS.ANDROID.CAMERA)
        .then((result) => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              console.log('This feature is not available (on this device / in this context)');
              break;
            case RESULTS.DENIED:
              console.log('The permission has not been requested / is denied but requestable');
              break;
            case RESULTS.LIMITED:
              imageCameraLaunch();
              console.log('The permission is limited: some actions are possible');
              break;
            case RESULTS.GRANTED:
              imageCameraLaunch();
              console.log('The permission is granted');
              break;
            case RESULTS.BLOCKED:
              console.log('The permission is denied and not requestable anymore');
              break;
          }
        })
        .catch((error) => {
        });
    }
  }


  return (
    <SafeAreaView>
      <View style={{marginTop: 10, borderBottomWidth: 1, width: "100%"}}>
        <View style={{flexDirection: "row", justifyContent: "space-around", marginBottom: 20}}>
          <TouchableOpacity  onPress={() => refRBSheet.current.open()} activeOpacity={0.6}>
            <Image source={{uri: userPhoto===""
                ?"https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"
                :`data:image/jpeg;base64,${userPhoto}`
            }}
                   style={{height: 150, width: 150, borderBottomRightRadius: 30, borderTopLeftRadius: 30}} />
          </TouchableOpacity>
          <View style={{justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 30, fontWeight: "bold", color: "#000"}}>{meState.me.name}</Text>
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
      <RBSheet ref={refRBSheet} closeOnDragDown={true} closeOnPressMask={true} openDuration={300} closeDuration={100}
               height={160}
               customStyles={{
                 wrapper: {
                 },
                 container: {
                   borderTopRightRadius:30,
                   borderTopLeftRadius:30,
                   shadowColor: '#000',
                   shadowOffset: {
                     width: 10,
                     height: 10
                   },
                   shadowRadius: 30,
                   shadowOpacity:0.6,
                   elevation:20
                 },
                 draggableIcon: {
                   backgroundColor: '#000',
                 }
               }}
      >
        <View style={styles.container}>
          <TouchableOpacity style={styles.touchableOpacityContainer} onPress={imageCameraLaunch} activeOpacity={0.6}>
            <View style={styles.photo}>
              <Photo fill={'#000'}/>
            </View>
            <Text style={styles.popupButton}>{Languages[DEFAULT_LANGUAGE].takePhoto}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableOpacityContainer} onPress={imageGalleryLaunch} activeOpacity={0.6}>
            <View style={styles.photo}>
              <Gallery fill={'#000'} width={32.009} height={32.009}/>
            </View>
            <Text style={styles.popupButton}>{languageState.defaultLanguage.fromGallery}</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  photo: {
    marginRight: Devices.width/10,
  },
  popupButton: {
    fontSize:14,
    textAlign:'left',
    color:COLORS.text,
  },
  touchableOpacityContainer: {
    flexDirection:"row",
    alignItems:"center",
    marginLeft:Devices.width/10,
    marginTop:Devices.width/20,
  },
});

export default Profile
