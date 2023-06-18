import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { HotelListAPIResponse } from "../../../services/hotels/response";
import HotelListAPI from "../../../services/hotels";

// @ts-ignore
const initialState: HotelListAPIResponse = {
  data: [],
  loading: false
}

export const fetchHotelList = createAsyncThunk(
  'fetchLocation',
  async ()=>{
    const response = await HotelListAPI.fetch();
    console.log("fetch");
    console.log(response);
    return response;
  }
);

const hotelListSlice = createSlice({
  name:'hotelListSlice',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchHotelList.pending,(state, action) => {
      console.log("wait")
      state.loading = true;
    })
    builder.addCase(
      fetchHotelList.fulfilled,
      (state, action: PayloadAction<HotelListAPIResponse>) => {
        if(action.payload!==undefined){
          console.log("fulfilled")
          state.data = action.payload.data;
          console.log("action payload")
          console.log(action.payload.data);
          //console.log(action)
          state.loading = false;
        }
        else{
          console.log("internet yok")
          state.loading = false;
        }
      }
    );
    builder.addCase(fetchHotelList.rejected,(state, action)=>{
      console.log("rejected")
      state.loading = false;
    })
  }
});
export default hotelListSlice.reducer;


