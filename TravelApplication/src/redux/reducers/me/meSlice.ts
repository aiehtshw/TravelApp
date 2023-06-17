import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { FireBaseRealTimeDBUtils } from "../../../services/firebaseRealTimeDBUtils/FireBaseRealTimeDBUtils";

const initialState = {
  me:{}
};

const meSlice = createSlice({
  name: 'meSlice',
  initialState,
  reducers: {
    callMe: (state, action) => {
      state.me = action.payload

    },
  },
  extraReducers: (builder) => {}
});

export const { callMe } = meSlice.actions;
export default meSlice.reducer;
