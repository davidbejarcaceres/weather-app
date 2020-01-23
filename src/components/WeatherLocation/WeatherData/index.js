import React, { Component } from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature'
import {
    CLOUD,
    RAIN,
    SUN,
    SNOW,
    WINDY,
    CLOUDY,
    FOG
} from '../../../consants/weather'

import "./styles.css"

class WeatherData extends Component {
    render() {
        return (
            <div className="weatherDataCont">
                <WeatherTemperature temperature={20} weatherState={FOG}></WeatherTemperature>
                <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
            </div>
        );
    }
}

export default WeatherData;
