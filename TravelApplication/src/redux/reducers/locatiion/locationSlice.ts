import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import LocationAPI from "../../../services/location";
import { LocationAPIResponse } from "../../../services/location/response";


// @ts-ignore
const initialState: LocationAPIResponse = {
  data: []
}

export const fetchLocation = createAsyncThunk(
  'fetchLocation',
  async ()=>{
    const response = await LocationAPI.fetch();
    console.log("fetch");
    console.log(response);
    return response;
  }
);

const locationSlice = createSlice({
  name:'listRestourantsSlice',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchLocation.pending,(state, action) => {
      console.log("wait")

    })
    builder.addCase(
      fetchLocation.fulfilled,
      (state, action: PayloadAction<LocationAPIResponse>) => {
        if(action.payload!==undefined){
          console.log("fulfilled")
          initialState.data = action.payload.data;
          console.log("action payload")
          console.log(action.payload.data);
          //console.log(action)

        }
        else{
          console.log("internet yok")
        }
      }
    );
    builder.addCase(fetchLocation.rejected,(state, action)=>{
      console.log("rejected")
    })
  }
});
export default locationSlice.reducer;


