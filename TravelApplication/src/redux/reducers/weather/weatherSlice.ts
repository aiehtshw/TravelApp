import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import WeatherAPI from "../../../services/weather";
import { WeatherAPIResponse } from "../../../services/weather/response";



// @ts-ignore
const initialState:WeatherAPIResponse = {
  forecast: {
    forecastday: []
  },
  loading:false,
  current:{}
}

export const fetchlWeather = createAsyncThunk(
  'fetchWeather',
  async ()=>{
    const response = await WeatherAPI.fetch();
    console.log("fetch");
    //console.log(response);
    return response;
  }
);

const weatherSlice = createSlice({
  name:'weatherSlice',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchlWeather.pending,(state, action) => {
      console.log("wait")
      initialState.loading = true
    })
    builder.addCase(
      fetchlWeather.fulfilled,
      (state, action: PayloadAction<WeatherAPIResponse>) => {
        initialState.loading = false
        if(action.payload!==undefined){
          console.log("fulfilled")
          state.forecast = action.payload.forecast
          state.loading = false
          state.current = action.payload.current
          console.log("girmeli")

        }
        else{
          console.log("internet yok")
          state.loading = false
        }
      }
    );
    builder.addCase(fetchlWeather.rejected,(state, action)=>{
      console.log("rejected")
      state.loading = false
    })
  }
});
export default weatherSlice.reducer;


