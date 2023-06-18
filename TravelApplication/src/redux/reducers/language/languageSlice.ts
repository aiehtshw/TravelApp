import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import tr from "../../../utils/languages/locales/tr";
import en from "../../../utils/languages/locales/en";

const initialState = {
  defaultLanguage:en
};

const languageSlice = createSlice({
  name: 'languageSlice',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.defaultLanguage = action.payload;
    },
  },
  extraReducers: (builder) => {}
});

export const { changeLanguage} = languageSlice.actions;
export default languageSlice.reducer;
