import { combineReducers } from '@reduxjs/toolkit';
import listRestourantsSlice from "./restourant/listRestourantsSlice";
import locationSlice from "./locatiion/locationSlice";
import hotelListSlice from "./hotels/hotelListSlice";
import loadingSlice from "./loading/loadingSlice";
import weatherSlice from "./weather/weatherSlice";
import meSlice from "./me/meSlice";


const rootReducer = combineReducers({
  listRestourantSlice: listRestourantsSlice,
  locationSlice: locationSlice,
  hotelListSlice:hotelListSlice,
  generalSlice: loadingSlice,
  weatherSlice: weatherSlice,
  meSlice: meSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
