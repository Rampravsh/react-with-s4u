import { configureStore } from "@reduxjs/toolkit";
import popup from "./features/popup/popup.slice";

const store = configureStore({
  reducer: {
    popup
  },
});
export default store;
