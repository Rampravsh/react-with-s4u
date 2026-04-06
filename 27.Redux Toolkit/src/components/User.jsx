import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { featchUser } from "../store/features/user/userSlice";

const User = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(featchUser());
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div>
      <h1>Users List</h1>
      <ol>
        {user &&
          user.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
      </ol>
    </div>
  );
};

export default User;
