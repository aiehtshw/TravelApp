import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Devices } from "../../../../config";

const HomeButton = (props:any) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={ [styles.item, {backgroundColor: props.item.background} ]}>
        {props.item.icon}
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    borderRadius:10,
    justifyContent: "center",
    alignItems: "center",
    width: Devices.width/2.1,
    height: Devices.width/2.1,
    backgroundColor: "gray",
    marginTop: 10,
    marginBottom: 10
  },
});
export default HomeButton;
