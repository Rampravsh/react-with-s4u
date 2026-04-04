import React, { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { featchForcast, featchWeather } from "./store/actions/weatherAction";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import ForcastWeather from "./components/ForcastWeather";

const App = () => {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    // useStore() ka use karke hum initial state nikal lenge bina App ko re-render kiye
    const initialCity = store.getState().weatherReducer.city;
    dispatch(featchWeather(initialCity));
    dispatch(featchForcast(initialCity));
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
