import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import tr from "../../../utils/languages/locales/tr";

const initialState = {
  defaultLanguage:tr
};

const languageSlice = createSlice({
  name: 'languageSlice',
  initialState,
  reducers: {
    showLoading: (state, action) => {
      state.defaultLanguage = action.payload;
    },
  },
  extraReducers: (builder) => {}
});

export const { showLoading} = languageSlice.actions;
export default languageSlice.reducer;
