import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { featchForcast, featchWeather } from "./store/actions/weatherAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(featchWeather("patna"));
    dispatch(featchForcast("delhi"));
  }, []);

  return <>app</>;
};

export default App;
