import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { featchWeather } from "./store/reducers/weatherReducers";

const App = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(featchWeather("patna"))
  }, [])
  
  return <>app</>;
};

export default App;
