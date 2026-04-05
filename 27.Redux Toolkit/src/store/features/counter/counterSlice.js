import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    changeByValue: (state, action) => {
      console.log(action, state);
      state.value = action.payload;
    },
  },
});

export const { action, decrement, changeByValue } = counterSlice.actions;

export default counterSlice.reducer;
