const initialState = {
  products: [],
  count: 0,
};

export const addToProduct = (details) => {
  return {
    type: "ADD_TO_PRODUCT",
    payload: details,
  };
};

export const addToCount = () => {
  return {
    type: "ADD_TO_COUNT",
    // payload: details,
  };
};

const productReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_PRODUCT") {
    console.log(action.type, action.payload);
    // console.log("add to product reducer");
    return { ...state,products: [...state.products, action.payload] };
  } else if (action.type === "ADD_TO_COUNT") {
    return { ...state, count: state.count + 1 };
  } else {
    return state;
  }
};

export default productReducer;
