import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/store";
import { showLoading } from "../../../redux/reducers/loading/loadingSlice";
import { Current, Forecast, WeatherAPIResponse } from "../../../services/weather/response";
import { COLORS } from "../../../utils/colors";
import { Celcius } from "../../../../assets/icons";
import { RFValue } from "react-native-responsive-fontsize";
import weatherSlice, { fetchlWeather } from "../../../redux/reducers/weather/weatherSlice";

const Weather = () => {
  const dispatch = useDispatch();
  const weatherState = useAppSelector((state) => state.weatherSlice);
  const [forecast,setForecast] = useState<Forecast>();
  const [currentWeather,setCurrentWeather] = useState<Current>();
  const[weatheruseState,setWeatherUseState] = useState<WeatherAPIResponse>();
  useEffect(()=>{
    if(weatherState.loading === false){
      setForecast(weatherState.forecast)
      setCurrentWeather(weatherState.current)
      setWeatherUseState(weatherState)
    }
  },[weatherState.loading])
  useEffect(()=>{
    if(currentWeather&&currentWeather.temp_c && forecast)
      dispatch(showLoading(false))
  },[currentWeather,forecast])

  return(
    <View>
      {
        currentWeather && forecast
        ?<View style={styles.container}>

            <View style={styles.today}>
              <Text style={{fontSize:RFValue(40),color:'#000'}}>{currentWeather?currentWeather.temp_c:'0'}</Text>
              <Celcius width={40}/>
            </View>

            <View style={styles.aftertoday}>
              <View>
                <Text style={{
                  fontSize:RFValue(13),
                  fontWeight:'bold',
                  justifyContent:'center',
                  width:'90%',
                  marginTop:20,
                  alignSelf:'center',
                }}>Average Temperatures of 3 Days</Text>
                <View style={{height:'90%',width:'90%',alignSelf:'center',alignItems:'center'}}>
                  <View style={{height:'20%',width:'80%',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:RFValue(14)}}>{forecast.forecastday[0].date}</Text>
                    <Text style={{fontSize:RFValue(14),fontWeight:'bold'}}>{forecast.forecastday[0].day.avgtemp_c} C°</Text>
                  </View>
                  <View style={{height:'20%',width:'80%',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:RFValue(14)}}>{forecast.forecastday[1].date}</Text>
                    <Text style={{fontSize:RFValue(14),fontWeight:'bold'}}>{forecast.forecastday[1].day.avgtemp_c} C°</Text>
                  </View>
                  <View style={{height:'20%',width:'80%',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:RFValue(14)}}>{forecast.forecastday[2].date}</Text>
                    <Text style={{fontSize:RFValue(14),fontWeight:'bold'}}>{forecast.forecastday[2].day.avgtemp_c} C°</Text>
                  </View>

                </View>
              </View>

            </View>

          </View>
          :<></>
      }

    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:COLORS.weather_screen_bg,
    height:'100%',
    width:'100%'
  },
  today:{
    height:'60%',
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row"
  },
  aftertoday:{
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    height:'40%',
    backgroundColor:COLORS.weather_after_today_bg,
    flexDirection:"column"
  }
})
export default Weather;
