import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'

const ForecastItemLazy = lazy(() => import("./ForecastItem"));


const ForecastExtended = ({city, forecast}) => {  

  const renderForecastItemDays = (forecastData) => {
    return forecastData.map((forecast, index) => 
    <Suspense> <ForecastItemLazy className="forecastItemCont" weekday={forecast.weekDay} hour={forecast.hour} data={forecast.data} key={index}></ForecastItemLazy> </Suspense>);
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

