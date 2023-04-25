import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../utils/colors";

const PointCircle = (props:any) => {
  return(
    <View style={styles.container}>

      <View style={[styles.semiLeftCircle,{marginLeft: 0}, props.point >=1
        ? {backgroundColor: COLORS.point_circle}
        :{backgroundColor: COLORS.white}
      ]}/>
      <View style={[styles.semiRightCircle, props.point >= 2
        ? {backgroundColor: COLORS.point_circle}
        : {backgroundColor: COLORS.white}
      ]}/>

      <View style={[styles.semiLeftCircle, props.point >=3
        ? {backgroundColor: COLORS.point_circle}
        :{backgroundColor: COLORS.white}
      ]}/>
      <View style={[styles.semiRightCircle, props.point >= 4
        ? {backgroundColor: COLORS.point_circle}
        : {backgroundColor: COLORS.white}
      ]}/>

      <View style={[styles.semiLeftCircle, props.point >=5
        ? {backgroundColor: COLORS.point_circle}
        :{backgroundColor: COLORS.white}
      ]}/>
      <View style={[styles.semiRightCircle, props.point >= 6
        ? {backgroundColor: COLORS.point_circle}
        : {backgroundColor: COLORS.white}
      ]}/>

      <View style={[styles.semiLeftCircle, props.point >=7
        ? {backgroundColor: COLORS.point_circle}
        :{backgroundColor: COLORS.white}
      ]}/>
      <View style={[styles.semiRightCircle, props.point >= 8
        ? {backgroundColor: COLORS.point_circle}
        : {backgroundColor: COLORS.white}
      ]}/>

      <View style={[styles.semiLeftCircle, props.point >=9
        ? {backgroundColor: COLORS.point_circle}
        :{backgroundColor: COLORS.white}
      ]}/>
      <View style={[styles.semiRightCircle, props.point >= 10
        ? {backgroundColor: COLORS.point_circle}
        : {backgroundColor: COLORS.white}
      ]}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    alignItems:"center",
    height:50,
  },
  semiLeftCircle: {
    width:10,
    height:20,
    marginLeft:5,
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50,
    backgroundColor: COLORS.point_circle
  },
  semiRightCircle: {
    width:10,
    height:20,
    borderTopRightRadius:50,
    borderBottomRightRadius:50,
    backgroundColor:'#fff'
  }
})
export default PointCircle;
