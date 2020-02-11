import { SET_FORECAST_DATA, SET_WEATHER_CITY, GET_WEATHER_CITY } from "./../actions"
import { createSelector } from "reselect";

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:
            const { city, forecastData } = action.payload
            return { ...state, [city]: { forecastData: forecastData } }
            break;

        case GET_WEATHER_CITY:
            const city = action.payload
            return { ...state, [city]: { weather: null } }
            break;

        case SET_WEATHER_CITY:
            const { city, weather } = action.payload
            return { ...state, [city]: weather }
            break;

        default:
            return state;
            break;
    }
}

export const getForecastDataFromCities = createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData)