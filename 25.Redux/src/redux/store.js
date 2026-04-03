import { createStore } from "redux";
import productReducer from "./reducer/productReducer";

const store = createStore(
    productReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



export default store;
