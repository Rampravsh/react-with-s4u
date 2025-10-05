import React, { useState } from "react";

const Card = () => {
  const [count, setCount] = useState(0);
  const [userData, setuserData] = useState({
    name: "rampravesh",
    age: 20,
    id: "rpk",
  });

  const ageInc = () => {
    setuserData((prevUserData) => ({
      ...prevUserData, // Copy all old properties
      age: prevUserData.age + 1, // Overwrite the age property
    }));
    console.log(userData);
  };
  return (
    <div>
      <div>
        <h1>Hello world!</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>1 aur add karo</button>
      </div>
      <div>
        <h1>{userData.age}</h1>
        <button onClick={ageInc}>age bdhao</button>
      </div>
    </div>
  );
};

export default Card;
