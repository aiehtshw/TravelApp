import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import {COLORS} from '~/utils/colors'
import { Cities, DEFAULT_LANGUAGE, Languages } from "~/config";
import {
  At,
  Camera,
  Gallery,
  HidePassword, Location,
  Password,
  Photo,
  ProfileIcon,
  ShowPassword
} from "../../../../assets/icons";
import { RFValue } from "react-native-responsive-fontsize";
import Login from "../login";
import { Routes } from "../../../navigator/routes";
import { FirebaseAuthUtils } from "../../../services/firebaseAuth/FirebaseAuthUtils";
import { useAppSelector } from "../../../redux/store";
import RBSheet from "react-native-raw-bottom-sheet";
import ProfileInfo from "../../profile/components/profileInfo";

const SignUp = ({navigation}:any) => {
  const languageState = useAppSelector((state) => state.languageSlice);
  const [showPassword,setShowPassword] = useState<boolean>(true);
  const [mail,setMail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [surname, setSurname] = useState<string>();
  const [city, setCity] = useState<string>(languageState.defaultLanguage.chooseCity);

  const refRBSheet = useRef();
  const signUp = () => {
    console.log(username)
    if(mail && password && username && city !==languageState.defaultLanguage.chooseCity){
      FirebaseAuthUtils.signUp(mail,password,username,city);
    }
  }
  const login = () => {
    if(navigation.canGoBack())
      navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <View style={styles.textContainer}>
          <Text style={{fontSize:RFValue(20),fontWeight:'bold'}}>{languageState.defaultLanguage.signUp}</Text>
        </View>

        <View style={styles.email}>
          <View style={{justifyContent:"center"}}>
            <At fill={COLORS.iconColor} width={20} height={20}/>
          </View>
          <TextInput
            onChangeText={mail => setMail(mail)}
            value={mail}
            keyboardType={"email-address"}
            placeholder={languageState.defaultLanguage.email}
            style={styles.login_text}/>
        </View>

        <View style={styles.username}>
          <View style={{justifyContent:"center"}}>
            <ProfileIcon fill={COLORS.iconColor} width={20} height={20}/>
          </View>
          <TextInput
            placeholder={languageState.defaultLanguage.username}
            onChangeText={username => setUsername(username)}
            value={username}
            style={styles.login_text}
          />
        </View>

        <View style={styles.password}>
          <View style={{justifyContent:"center"}}>
            <Password fill={COLORS.iconColor} width={20} height={20}/>
          </View>
          <TextInput
            placeholder={languageState.defaultLanguage.password}
            secureTextEntry={showPassword}
            onChangeText={password => setPassword(password)}
            value={password}
            style={[styles.login_text,{width:'75%'}]}
          />

          <View style={{justifyContent:"center",borderBottomWidth:1,borderBottomColor:COLORS.iconColor}}>
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}>
              {
                showPassword
                  ? <ShowPassword fill={COLORS.iconColor} width={20} height={20}/>
                  : <HidePassword fill={COLORS.iconColor} width={20} height={20}/>
              }
            </TouchableOpacity>
          </View>

        </View>
        <TouchableOpacity style={styles.username} onPress={()=>refRBSheet.current.open()}>
          <View style={{justifyContent:"center"}}>
            <Location fill={COLORS.iconColor} width={30} height={30}/>
          </View>
          <Text style={styles.login_text}>{city}</Text>
        </TouchableOpacity>
        <View style={styles.enter}>
          <TouchableOpacity onPress={signUp}>
            <View style={styles.enterArea}>
              <Text style={
                {textAlign:"center",
                  color:COLORS.white,
                  fontSize:RFValue(15),
                  fontWeight:'bold',}}>
                {languageState.defaultLanguage.signUp}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.haveAccount}>
          <Text>{languageState.defaultLanguage.haveAccount}</Text>
          <TouchableOpacity onPress={login}>
            <Text style={{
              color:COLORS.placeHolder,
              fontStyle:"italic",
            }}>  {languageState.defaultLanguage.login}</Text>
          </TouchableOpacity>
        </View>

      </View>
      <RBSheet ref={refRBSheet} closeOnDragDown={true} closeOnPressMask={true} openDuration={300} closeDuration={100}
               height={300}
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

          <FlatList
            data={Cities}
            renderItem={
              ({ item,index }) => (
               <>
                <TouchableOpacity style={{width:'100%',marginLeft:30,padding:10}} onPress={()=>{
                  setCity(item)
                  refRBSheet.current.close();
                }}>
                  <Text style={{width:'100%'}}>{item}</Text>
                </TouchableOpacity>
               </>
              )
            }
            keyExtractor={list => list.id}
          />

      </RBSheet>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: COLORS.background,
    width: '100%',
    height: '100%',
  },
  content: {
    width: '90%',
    height: '70%',
    backgroundColor: COLORS.loginBackground,
    borderRadius:20,
  },
  textContainer: {
    marginTop: '30%',
    marginLeft:20
  },
  email: {
    marginTop:40,
    height:40,
    marginLeft:20,
    flexDirection:"row",
  },
  login_text: {
    marginLeft:5,
    borderBottomColor: COLORS.iconColor,
    borderBottomWidth:1,
    width:'80%',
  },
  username: {
    marginTop:25,
    height:40,
    marginLeft:20,
    flexDirection:"row",
  },
  password: {
    marginTop: 25,
    height:40,
    marginLeft:20,
    flexDirection:"row",
  },
  forgotPassword: {
    flexDirection:"row-reverse",
    marginTop:25,
    marginLeft:'12%',
  },
  enter: {
    marginTop:25,
    alignSelf:"center",
  },
  enterArea: {
    justifyContent:"center",
    height: 50,
    backgroundColor: COLORS.loginButton,
    width: 100,
    borderRadius: 10,
  },
  haveAccount: {
    marginTop:25,
    flexDirection:"row",
    justifyContent:"center",
  }
});
export default SignUp;
