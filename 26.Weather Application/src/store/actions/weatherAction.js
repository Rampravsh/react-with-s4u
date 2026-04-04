import api from "../../services/api";
import {
  FEATCH_CURRENT_SUCCESS,
  FEATCH_FORCAST_SUCCESS,
  FEATCH_WEATHER_ERROR,
  FEATCH_WEATHER_PENDING,
  SET_CITY,
} from "../constants/weatherConstants";

export const fetchWeatherPending = (details) => {
  return {
    type: FEATCH_WEATHER_PENDING,
    payload: details,
  };
};
export const fetchCurrentSuccess = (details) => {
  return {
    type: FEATCH_CURRENT_SUCCESS,
    payload: details,
  };
};
export const fetchForcastSuccess = (details) => {
  return {
    type: FEATCH_FORCAST_SUCCESS,
    payload: details,
  };
};
export const fetchWeatherError = (details) => {
  return {
    type: FEATCH_WEATHER_ERROR,
    payload: details,
  };
};
export const setCity = (details) => {
  return {
    type: SET_CITY,
    payload: details,
  };
};

export const featchWeather = (city) => {
  return async (dispatch) => {
    try {
      dispatch(fetchWeatherPending());
      const response = await api.get(`weather?q=${city}`);
      dispatch(fetchCurrentSuccess(response.data));
      console.log(response);
    } catch (error) {
      dispatch(fetchWeatherError(error.message));
    }
  };
};

export const featchForcast = (city) => {
  return async (dispatch) => {
    try {
      dispatch(fetchWeatherPending());
      const response = await api.get(`forecast?q=${city}`);
      dispatch(fetchForcastSuccess(response.data.list));
      console.log(response);
    } catch (error) {
      dispatch(fetchWeatherError(error.message));
    }
  };
};
