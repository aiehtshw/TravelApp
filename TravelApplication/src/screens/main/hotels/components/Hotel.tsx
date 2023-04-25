import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import PointCircle from "../../../../components/PointCircle";


const Hotel = ( props:any ) => {

  return(

    <View style={styles.container}>
      <View style={{width:'50%',alignItems:"center",justifyContent:"center"}}>
        <Image
          style={{width:'90%',height:'90%'}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View style={{width:'50%'}}>
        <Text style={{
          fontSize:RFValue(20),
          fontWeight:"bold"
        }}>{props.hotel_name}</Text>
        <View style={styles.point}>
          <PointCircle point={props.total_vote/props.total_vote_count}/>
          <Text style={styles.total_count_text}>{props.total_vote_count}</Text>
        </View>
        <Text style={{height:180}} numberOfLines={9}>{props.description}</Text>
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    width: '90%',
    maxHeight:250,
    alignSelf:"center",
    borderBottomWidth:1,
    flexDirection:"row",
  },
  point: {
    flexDirection:"row"
  },
  total_count_text: {
    fontSize:RFValue(15),
    fontWeight: '600',
    alignSelf:"center",
    marginLeft:5
  }
})

export default Hotel;
