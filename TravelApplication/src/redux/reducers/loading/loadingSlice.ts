import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  goScreen: ''
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    showLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {}
});

export const { showLoading} = generalSlice.actions;
export default generalSlice.reducer;
