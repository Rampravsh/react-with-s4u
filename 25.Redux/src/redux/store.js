import { createStore } from "redux";
import productReducer from "./reducer/productReducer";

const store = createStore(
    productReducer
);



export default store;
