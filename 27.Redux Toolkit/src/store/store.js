import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    counterReducer,
    userReducer,
  },
});

export default store;
