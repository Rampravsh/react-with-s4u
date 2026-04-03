import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const state = useSelector((state) => state.productReducer.products);
  console.log(state);
  useEffect(() => {
    console.log("re render hua kya");
  });

  //   if (!state) {
  //     return <h2>No products added yet</h2>;
  //   }
  return (
    <div>
      {/* {state.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
        </div>
      ))} */}
      {JSON.stringify(state)}
    </div>
  );
};

export default Products;
