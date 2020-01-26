import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Weatherdata from "../WeatherLocation/WeatherData"

function ForecastItem(props) {
    const [weekDay] = useState(props.weekday)
    const [hour] = useState(props.hour)
    const [data] = useState(props.data)
    return (
        <div>
            <span className="dayTime">{weekDay}  {hour} hs</span>
            <br></br>
            <Weatherdata data={data}></Weatherdata>            
        </div>
    )
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default ForecastItem

