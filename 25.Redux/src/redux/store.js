import { combineReducers, createStore } from "redux";
import productReducer from "./reducer/productReducer";
import { cartReducer } from "./reducer/cartReducer";

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
