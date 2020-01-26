import React from 'react'
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import ForecastItem from "./ForecastItem"
import forecast_api from "../consants/forecast_api"
import { SUN } from '../consants/weather';
import transformForecast from "../services/transformForecast"
import CircularProgress from "@material-ui/core/CircularProgress"
import "./styles.css";


const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes"
]

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 78,
    wind: "22 km/h"
  }

const ForecastExtended = (props) => {
    const [city, setCity] = useState(props.city)
    const [hour, setHour] = useState(10)
    const [data, setData] = useState(null)
    console.log(city);


    useEffect(() => {
        const fetchData = async () => {
          let forecast = await getAPI(forecast_api(city));
          console.log(forecast);
          setData(forecast) 
    
        };
    
        fetchData();
      }, []); // Inside of the brackets input the variable as a listener to run the async function again


      function getAPI(url) {
        return fetch(url)
          .then(res => {
            return res.json();
          })
          .then(jsonResponse => {
            let forecast = transformForecast(jsonResponse)                       
            return forecast;
          });
      };

    const renderForecastItemDays = (forecastData) => {     
        return forecastData.map( (forecast, index) => <ForecastItem className="forecastItemCont" weekday={forecast.weekDay} hour={forecast.hour} data={forecast.data}  key={index}></ForecastItem> );
    }
    
    return (
        <div className="forecastExtended">
            <h1>Extended Forecast for {props.city}</h1>
            {
                (data) ? renderForecastItemDays(data) : <CircularProgress size={"3em"}></CircularProgress>
            }
            
        </div>
    )
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended

