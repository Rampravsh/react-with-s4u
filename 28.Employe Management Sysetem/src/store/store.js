import { configureStore } from "@reduxjs/toolkit";
import popup from "./features/popup/popup.slice";
import employee from "./features/employee/employee.slice";

const store = configureStore({
  reducer: {
    popup,
    employee,
  },
});
export default store;
