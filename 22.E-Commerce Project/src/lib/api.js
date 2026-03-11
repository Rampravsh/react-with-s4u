import axios from "axios";

export const fetchData = async () => {
  const response = await axios("https://fakestoreapi.com/products");
  return response.data;
};

export const fetchProductById = async ({ params }) => {
  // console.log(params);
  const response = await axios(
    `https://fakestoreapi.com/products/${params.id}`,
  );
  return response.data;
};
