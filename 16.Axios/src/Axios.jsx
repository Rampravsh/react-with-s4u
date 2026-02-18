import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
  });
  const fetchData = async () => {
    const response = await axios({
      url: "https://699451fafade7a9ec0f50362.mockapi.io/api/v1/user",
    });
    // console.log(response);
    setUsers(response.data);
  };

  const postData = async () => {
    const response = await axios({
      url: "https://699451fafade7a9ec0f50362.mockapi.io/api/v1/user",
      method: "post",
      data: userDetails,
    });
    setUserDetails({
      name: "",
      age: "",
    });
    fetchData();
    console.log(response);
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const editData = async () => {
    const response = await axios({
      url: `https://699451fafade7a9ec0f50362.mockapi.io/api/v1/user/${userDetails.id}`,
      method: "put",
      data: userDetails,
    });
    setUserDetails({
      name: "",
      age: "",
    });
    fetchData();
  };
  const deleteData = async (data) => {
    await axios({
      url: `https://699451fafade7a9ec0f50362.mockapi.io/api/v1/user/${data.id}`,
      method: "delete",
    });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(userDetails);
  return (
    <div>
      {/* <button
        className="bg-red-400 p-4 mt-6 rounded-2xl mx-4"
        onClick={fetchData}
      >
        Fetch Data
      </button> */}

      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        value={userDetails.name}
        onChange={handleForm}
      />
      <input
        type="text"
        placeholder="Enter your age"
        name="age"
        value={userDetails.age}
        onChange={handleForm}
      />

      {userDetails.editData ? (
        <button
          className="bg-green-400 p-4 mt-6 rounded-2xl "
          onClick={editData}
        >
          edit Data
        </button>
      ) : (
        <button className="bg-red-400 p-4 mt-6 rounded-2xl " onClick={postData}>
          Post Data
        </button>
      )}

      {users.map((data) => {
        return (
          <div
            className="bg-gray-700 p-6 rounded-2xl my-2 mx-2 w-fit flex flex-col"
            key={data.id}
          >
            <div>id: {data.id} </div>
            <div>name: {data.name} </div>
            <div>age: {data.age} </div>
            <button
              onClick={() => {
                setUserDetails({ ...data, editData: true });
              }}
              className="bg-green-400 p-2 rounded-xl mt-2"
            >
              edit data
            </button>
            <button
              onClick={() => {
                deleteData(data);
              }}
              className="bg-red-400 p-2 rounded-xl mt-2"
            >
              delete data
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Axios;
