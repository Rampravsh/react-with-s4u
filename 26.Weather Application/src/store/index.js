import { combineReducers } from "redux";
import { weatherReducer } from "./reducers/weatherReducers";

const rootReducer = combineReducers({
  weatherReducer,
});

export default rootReducer;
