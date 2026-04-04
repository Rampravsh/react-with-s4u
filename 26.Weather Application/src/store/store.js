import { applyMiddleware, compose, createStore } from "redux";
import { weatherReducer } from "./reducers/weatherReducers";
import { thunk } from "redux-thunk";

const store = createStore(
  weatherReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
