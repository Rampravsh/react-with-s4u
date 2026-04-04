import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { featchForcast, featchWeather } from "./store/actions/weatherAction";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import ForcastWeather from "./components/ForcastWeather";

const App = () => {
  const city = useSelector((state) => state.weatherReducer.city);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(featchWeather(city));
    dispatch(featchForcast(city));
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center m-10 ">
        <Search />
        <CurrentWeather />
        <ForcastWeather />
      </div>
    </>
  );
};

export default App;
