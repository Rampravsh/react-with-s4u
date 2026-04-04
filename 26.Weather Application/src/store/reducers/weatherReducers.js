import api from "../../services/api";
import {
  FEATCH_CURRENT_SUCCESS,
  FEATCH_FORCAST_SUCCESS,
  FEATCH_WEATHER_ERROR,
  FEATCH_WEATHER_PENDING,
  SET_CITY,
} from "../constants/weatherConstants";

const initialState = {
  current: null,
  forecast: null,
  loading: false,
  error: null,
  city: "patna",
};

export const weatherReducer = (state = initialState, action) => {
  if (action.type === FEATCH_WEATHER_PENDING) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  } else if (action.type === FEATCH_CURRENT_SUCCESS) {
    return {
      ...state,
      loading: false,
      current: action.payload,
    };
  } else if (action.type === FEATCH_FORCAST_SUCCESS) {
    return {
      ...state,
      loading: false,
      forecast: action.payload,
    };
  } else if (action.type === FEATCH_WEATHER_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  } else if (action.type === SET_CITY) {
    return {
      ...state,
      city: action.payload,
    };
  } else {
    return state;
  }
};


