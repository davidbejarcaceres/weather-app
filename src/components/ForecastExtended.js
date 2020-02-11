import React from 'react'
import PropTypes from 'prop-types'
import ForecastItem from "./ForecastItem"
import CircularProgress from "@material-ui/core/CircularProgress"


const ForecastExtended = ({city, forecast}) => {  

  const renderForecastItemDays = (forecastData) => {
    return forecastData.map((forecast, index) => <ForecastItem className="forecastItemCont" weekday={forecast.weekDay} hour={forecast.hour} data={forecast.data} key={index}></ForecastItem>);
  }

  return (
    <div className="forecastExtended">
      <h1>Extended Forecast for {city}</h1>

      <div>

      </div>
      {
        
        renderForecastItemDays(forecast)

      }

    </div>
  )
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecast: PropTypes.array.isRequired,
}

export default ForecastExtended

