import React from "react";
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import {COLORS} from '~/utils/colors'
import { DEFAULT_LANGUAGE, Languages } from "~/config";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <View style={styles.textContainer}>
          <Text>{Languages[DEFAULT_LANGUAGE].login}</Text>
        </View>

        <View style={styles.email}>
          <TextInput>

          </TextInput>
        </View>

        <View style={styles.password}>
          <TextInput>

          </TextInput>
        </View>

        <View style={styles.forgotPassword}>
          <TouchableOpacity></TouchableOpacity>
        </View>

        <View style={styles.enter}>
          <TouchableOpacity>
            <View style={styles.enterArea}>
              <Text style={{textAlign:"center"}}>{Languages[DEFAULT_LANGUAGE].login}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.haveAccount}>
          <Text>{Languages[DEFAULT_LANGUAGE].haveYouAccount}</Text>
          <TouchableOpacity>
            <Text>{Languages[DEFAULT_LANGUAGE].signUp}</Text>
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
    opacity: 0.3,
  },
  textContainer: {
    marginTop: 50
  },
  email: {

  },
  password: {

  },
  forgotPassword: {

  },
  enter: {
    alignSelf:"center",
  },
  enterArea: {
    backgroundColor: COLORS.loginButton,
    width:100,
  },
  haveAccount: {
    flexDirection:"row",
    justifyContent:"space-evenly"
  }
});
export default Login
