import React, { Component } from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature'
import PropTypes from 'prop-types';
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

    constructor(props) {
        super(props);
        this.data = this.props.data;
    }

    render() {
        console.log(this.data.weatherState);

        return (
            <div className="weatherDataCont">
                <WeatherTemperature temperature={this.data.temperature} weatherState={this.data.weatherState}></WeatherTemperature>
                <WeatherExtraInfo humidity={this.data.humidity} wind={this.data.wind}></WeatherExtraInfo>                
            </div>
        );
    }
}

export default WeatherData;


WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })

};