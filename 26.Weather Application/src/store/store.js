import { createStore } from "redux";
import { weatherReducer } from "./reducers/weatherReducers";

const store = createStore(
  weatherReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
