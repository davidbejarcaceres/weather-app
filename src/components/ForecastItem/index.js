import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Weatherdata from "../WeatherLocation/WeatherData"

function ForecastItem({weekday, hour, data}) {

    return (
        <div>
            <span className="dayTime">{weekday}  {hour} hs</span>
            <br></br>
            {
                <Weatherdata data={data}></Weatherdata>
            }

        </div>
    )
}

ForecastItem.propTypes = {
    weekday: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default ForecastItem

