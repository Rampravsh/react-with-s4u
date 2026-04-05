import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { featchUser } from "../store/features/user/userSlice";

const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(featchUser());
  }, []);

  return <div>User</div>;
};

export default User;
