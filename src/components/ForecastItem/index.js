import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Weatherdata from "../WeatherLocation/WeatherData"
import { SUN } from '../../consants/weather'



function ForecastItem(props) {
    const [weekDay, setWeekDay] = useState(props.weekday)
    const [hour, setHour] = useState(props.hour)
    const [data, setData] = useState(props.data)
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

