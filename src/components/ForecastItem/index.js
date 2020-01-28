import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Weatherdata from "../WeatherLocation/WeatherData"

function ForecastItem(props) {
    const [weekday] = useState(props.weekday)
    const [hour] = useState(props.hour)
    const [data] = useState(props.data)
    return (
        <div>
            <span className="dayTime">{weekday}  {hour} hs</span>
            <br></br>
            {
                weekday ? <Weatherdata data={data}></Weatherdata> : null
            }

        </div>
    )
}

ForecastItem.propTypes = {
    weekday: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default ForecastItem

