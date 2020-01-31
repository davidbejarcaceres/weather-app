import forecast_api from "../consants/forecast_api"
import transformForecast from "../services/transformForecast"
import { transformWeather } from "../services/transformWeather";

import api_weather from "../consants/weather_api"

export const SET_CIUDAD = "SET_CIUDAD"
export const SET_FORECAST_DATA = "SET_FORECAST_DATA"

export const SET_WEATHER_CITY = "SET_WEATHER_CITY"
export const GET_WEATHER_CITY = "GET_WEATHER_CITY"


export const setCity = payload => ({ type: SET_CIUDAD, payload });

export const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload })
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload })

// const location = "Buenos Aires,ar";
const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url_base_forecast = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    return dispatch => {

        let url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;

        // Activar en el estado un indicador  bùsqueda de datos
        dispatch(setCity(payload))


        fetch(url_forecast)
            .then(res => {
                return res.json();
            })
            .then(jsonResponse => {
                let forecastData = transformForecast(jsonResponse)
                // return forecast;
                // Modificar el estado con el reusltado de la promise
                dispatch(setForecastData({ city: payload, forecastData: forecastData }));
            });

        return;
    }
}

export const setWeather = payload => {
    debugger
    return dispatch => {

        payload.forEach(city => {
            let url_weather = api_weather(payload)

            // Activar en el estado un indicador  bùsqueda de datos
            dispatch(getWeatherCity(city))


            fetch(url_weather)
                .then(res => {
                    return res.json();
                })
                .then(jsonResponse => {
                    let data = transformWeather(jsonResponse)
                    // return forecast;
                    // Modificar el estado con el reusltado de la promise
                    debugger
                    dispatch(setWeatherCity({ city, data }))
                });
        })

    }
}