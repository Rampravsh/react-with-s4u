import { combineReducers, createStore } from "redux";
import productReducer from "./reducer/productReducer";
import { cartReducer } from "./reducer/cartReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/es/storage";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

let persistor = persistStore(store);
export { store, persistor };
