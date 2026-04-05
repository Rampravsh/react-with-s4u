import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [],
  loading: false,
  error: null,
};

export const featchUser = createAsyncThunk("user/featchUser", async () => {
  const response = await axios({
    url: "https://jsonplaceholder.typicode.com/users",
  });
  console.log(response);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (addBuilder) => {
    addBuilder.addCase(featchUser.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    addBuilder.addCase(featchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    });
    addBuilder.addCase(featchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default userSlice.reducer;
