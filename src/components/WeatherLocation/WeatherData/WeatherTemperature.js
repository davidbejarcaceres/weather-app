import React, { Component } from 'react'
import WeatherIcons from "react-weathericons";
import PropTypes from 'prop-types';
import "./styles.css"

import {
    CLOUD,
    RAIN,
    SUN,
    SNOW,
    WINDY,
    CLOUDY,
    FOG
} from '../../../consants/weather'



const icons = {
    [CLOUD]: "cloud",
    [RAIN]: "rain",
    [SUN]: "day-sunny",
    [SNOW]: "snow",
    [WINDY]: "windy",
    [CLOUDY]: "cloudy",
    [FOG]: "fog"
};

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];

    if (icon)
        return <WeatherIcons className="wicon" name={icon}/>
    else
        return <WeatherIcons className="wicon" name={"day-sunny"}/>
}

export default class WeatherTemperature extends Component {


    render() {
        const { temperature, weatherState } = this.props
        return (
            <div className="weatherTemperaturCont">
                {

                    getWeatherIcon(weatherState)

                }
                <span className="temperature">{`${temperature}`}</span>
                <span className="temperatureType">{`Cº`}</span>
            </div>
        )
    }
}



WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string

};




