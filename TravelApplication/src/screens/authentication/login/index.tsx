import React from "react";
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import {COLORS} from '~/utils/colors'
import { DEFAULT_LANGUAGE, Languages } from "~/config";
import { At, Camera, Password } from "../../../../assets/icons";
import { RFValue } from "react-native-responsive-fontsize";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <View style={styles.textContainer}>
          <Text style={{fontSize:RFValue(20),fontWeight:'bold'}}>{Languages[DEFAULT_LANGUAGE].login}</Text>
        </View>

        <View style={styles.email}>
          <View style={{justifyContent:"center"}}>
            <At fill={COLORS.iconColor} width={20} height={20}/>
          </View>
          <TextInput style={styles.login_text}/>
        </View>

        <View style={styles.password}>
          <View style={{justifyContent:"center"}}>
            <Password fill={COLORS.iconColor} width={20} height={20}/>
          </View>
          <TextInput style={styles.login_text}/>
        </View>

        <View style={styles.forgotPassword}>
          <TouchableOpacity>
            <Text style={
              { color:COLORS.placeHolder,
                fontStyle:"italic"
              }}>{Languages[DEFAULT_LANGUAGE].forgotPassword}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.enter}>
          <TouchableOpacity >
            <View style={styles.enterArea}>
              <Text style={
                {textAlign:"center",
                  color:COLORS.white,
                  fontSize:RFValue(15),
                  fontWeight:'bold',}}>
                {Languages[DEFAULT_LANGUAGE].login}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.haveAccount}>
          <Text>{Languages[DEFAULT_LANGUAGE].haveYouAccount}</Text>
          <TouchableOpacity>
            <Text style={{
              color:COLORS.placeHolder,
              fontStyle:"italic",
            }}>  {Languages[DEFAULT_LANGUAGE].signUp}</Text>
          </TouchableOpacity>
        </View>

      </View>
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
export default Login
