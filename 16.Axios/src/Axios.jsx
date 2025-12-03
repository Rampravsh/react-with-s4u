import axios from "axios";
import React from "react";

const Axios = () => {
  const config = {
    url: "https://jsonplaceholder.typicode.com/users",
    // headers: {
    //   //   "Content-Type": "appliction/json",
    //   Accept: "application/json",
    //   Authorization: "Barer fklsdfkljsdkl",
    // },
    // timeout: "100",
    // params: {
    //   name: "rampravesh kumar",
    //   age: 20,
    // },
    // data: {
    //   name: "ram",
    // },
  };
  const fetchData = async () => {
    const data = await axios(config);
    console.log(data);
  };
  return (
    <>
      <div>Axios</div>
      <button onClick={fetchData} className="bg-red-400 p-4 mt-6 rounded-2xl">
        fetch data
      </button>
    </>
  );
};

export default Axios;
