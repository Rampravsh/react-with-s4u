import React from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const { current, loading, error } = useSelector(
    (state) => state.weatherReducer
  );
  console.log(current);


  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-center p-10 text-error">{error}</div>;
  if (!current) return null;

  return (
    <div className="card bg-base-200 shadow-xl m-4 p-6">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold capitalize">{current.name}</h2>
        <div className="flex items-center gap-4">
          <img
            src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
            alt={current.weather[0].description}
          />
          <span className="text-6xl font-bold">{Math.round(current.main.temp)}°C</span>
        </div>
        <p className="text-xl capitalize">{current.weather[0].description}</p>
        <div className="flex gap-8 mt-6">
          <div className="text-center">Humidity: {current.main.humidity}%</div>
          <div className="text-center">Wind: {current.wind.speed} m/s</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;