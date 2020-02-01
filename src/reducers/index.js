import { combineReducers, createStore } from "redux"
import { createSelector } from "reselect"
import { city } from './city'
import { cities, getForecastDataFromCities as _getForecastDataFromCities } from "./cities"

export default combineReducers({
    cities,
    city,
})

// export const getCity = createSelector(state => state.city, city => city); # Para luego

export const getCity = createSelector(state => state.city, city => city);

export const getForecastDataFromCities = createSelector(state => state.cities, getCity, _getForecastDataFromCities)
