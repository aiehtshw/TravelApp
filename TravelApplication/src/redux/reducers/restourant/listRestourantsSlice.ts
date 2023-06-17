import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import RestourantAPI from "../../../services/restourants";
import {
  Daum,
  Filters,
  FiltersV2, OpenHoursOptions, Paging,
  RestaurantAvailabilityOptions,
  RestourantAPIResponse
} from "../../../services/restourants/response";
import loading from "../../../components/loading";
import tr from "../../../utils/languages/locales/tr";


// @ts-ignore
const initialState: RestourantAPIResponse = {
  data: [],
  loading: false
}

export const fetchlistRestourant = createAsyncThunk(
  'fetchlistRestourant',
  async ()=>{
    const response = await RestourantAPI.fetch();
    console.log("fetch");
    console.log(response);
    return response;
  }
);

const listRestourantsSlice = createSlice({
  name:'listRestourantsSlice',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchlistRestourant.pending,(state, action) => {
      console.log("wait")
      initialState.loading = true;
    })
    builder.addCase(
      fetchlistRestourant.fulfilled,
      (state, action: PayloadAction<RestourantAPIResponse>) => {
        if(action.payload!==undefined){
          console.log("fulfilled")
          initialState.data = action.payload.data
          initialState.loading = false;
          console.log("action payload")
          console.log(action.payload.data);
          //console.log(action)

        }
        else{
          console.log("internet yok")

        }
      }
    );
    builder.addCase(fetchlistRestourant.rejected,(state, action)=>{
      console.log("rejected")
      initialState.loading = false;
    })
  }
});
export default listRestourantsSlice.reducer;


