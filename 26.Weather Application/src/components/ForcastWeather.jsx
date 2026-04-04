import React from "react";
import { useSelector } from "react-redux";

const ForcastWeather = () => {
  const forecast = useSelector((state) => state.weatherReducer.forecast);
  const loading = useSelector((state) => state.weatherReducer.loading);
  console.log(forecast);

  if (loading || !forecast) return null;

  // Filter to get one forecast per day (usually at 12:00:00)
  const dailyForecast = forecast.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );

  return (
    <div className="mt-8 w-full max-w-4xl">
      <h3 className="text-2xl font-bold mb-4 text-center">5-Day Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {dailyForecast.map((item, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-md p-4 flex flex-col items-center"
          >
            <p className="font-semibold">
              {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
              className="w-12 h-12"
            />
            <p className="text-lg font-bold">{Math.round(item.main.temp)}°C</p>
            <p className="text-xs capitalize opacity-70">
              {item.weather[0].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForcastWeather;
