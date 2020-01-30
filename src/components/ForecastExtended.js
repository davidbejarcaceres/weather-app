import React from 'react'
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import ForecastItem from "./ForecastItem"
import forecast_api from "../consants/forecast_api"
import transformForecast from "../services/transformForecast"
import CircularProgress from "@material-ui/core/CircularProgress"

const ForecastExtended = (props) => {
  const [city] = useState(props.city)
  const [data, setData] = useState(props.forecast)
  const [upDating, setUpdating] = useState(true)
  console.log("Forecast Extended:  " + city);
  console.log(props.forecast);


  // useEffect(() => {
  //   console.log("Ciudad ha cambiado");
  //   setUpdating(true)
  //   const fetchData = async () => {
  //     let forecast = await getAPI(forecast_api(props.city));
  //     console.log(forecast);
  //     setData(forecast)
  //     setUpdating(false)
  //   };

  //   fetchData()

  // }, [props.city]) // Inside of the brackets input the variable as a listener to run the async function again

  // function getAPI(url) {
  //   return fetch(url)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(jsonResponse => {
  //       let forecast = transformForecast(jsonResponse)
  //       return forecast;
  //     });
  // };

  const renderForecastItemDays = (forecastData) => {
    return forecastData.map((forecast, index) => <ForecastItem className="forecastItemCont" weekday={forecast.weekDay} hour={forecast.hour} data={forecast.data} key={index}></ForecastItem>);
  }

  return (
    <div className="forecastExtended">
      <h1>Extended Forecast for {props.city}</h1>

      <div>

      </div>
      {
        (props.forecast) ? renderForecastItemDays(props.forecast) : <CircularProgress size={"3em"}></CircularProgress>

      }

    </div>
  )
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended

