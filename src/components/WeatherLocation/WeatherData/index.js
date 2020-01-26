import React, { Component } from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import PropTypes from "prop-types";
import { useState } from "react";

import {
  CLOUD,
  RAIN,
  SUN,
  SNOW,
  WINDY,
  CLOUDY,
  FOG
} from "../../../consants/weather";

import "./styles.css";

const WeatherData = props => {
  const data = props.data;
  return (
    <div className="weatherDataCont">
      <WeatherTemperature
        temperature={data.temperature}
        weatherState={data.weatherState}
      ></WeatherTemperature>
      <WeatherExtraInfo
        humidity={data.humidity}
        wind={data.wind}
      ></WeatherExtraInfo>
    </div>
  );
};

export default WeatherData;

WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  }).isRequired
};
