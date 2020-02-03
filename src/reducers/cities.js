import {
  SET_FORECAST_DATA,
  SET_WEATHER_CITY,
  GET_WEATHER_CITY
} from "./../actions";
import { createSelector } from "reselect";
import toPairs from "lodash.topairs"

export const cities = (state = {}, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA: {
      const { city, forecastData } = action.payload;
      return { ...state, [city]: { forecastData: forecastData } };
      break;
    }

    case GET_WEATHER_CITY: {
      const city = action.payload;
      return { ...state, [city]: { ...state[city], data: null }};
      break;
    }

    case SET_WEATHER_CITY: {
      const { city, data } = action.payload;
      return { ...state, [city]: { ...state[city], data }};
      break;
    }

    default:
      return state;
      break;
  }
};

export const getForecastDataFromCities = createSelector(
  (state, city) => state[city] && state[city].forecastData,
  forecastData => forecastData
);

const fromObjToArray = cities => (toPairs(cities).map(([key, value]) => ({ key, name: key, data: value.data })));

export const getWeatherCities = 
        createSelector(state => fromObjToArray(state), cities => cities);
