const initialState = {
  products: [],
};

export const addToProduct = () => {
  return {
    type: "ADD_TO_PRODUCT",
    payload: "",
  };
};

const productReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_PRODUCT") {
    console.log("add to product reducer");
    return state;
  } else {
    return state;
  }
};

export default productReducer;
