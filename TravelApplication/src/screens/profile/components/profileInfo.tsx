import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const ProfileInfo = (props:any) => {

  return (
    <TouchableOpacity disabled={props.disable} onPress={props.onPress}>
      <View style={[{flexDirection: "row", padding:10, alignItems:'center'},
        props.index === 4
        ? {borderBottomWidth:1}:{}]}>
        {props.icon}
        <Text style={{marginLeft: 10, fontSize: RFValue(14), color: "#000", fontWeight: "400"}}>{[props.text]}</Text>
      </View>
    </TouchableOpacity>
  );

}

export  default  ProfileInfo;
