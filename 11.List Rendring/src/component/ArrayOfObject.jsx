import React from "react";

const ArrayOfObject = () => {
  const users = [
    { id: 1, name: "rampravesh", age: 23 },
    { id: 2, name: "shyam", age: 43 },
    { id: 3, name: "viyam", age: 13 },
    { id: 4, name: "siyam", age: 33 },
  ];
  return (
    <div>
      {users.map((user) => (
        <ul key={user.id}>
          <li>Name: {user.name}</li>
          <li>Age: {user.age}</li>
        </ul>
      ))}
    </div>
  );
};

export default ArrayOfObject;
