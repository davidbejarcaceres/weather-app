import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import PropTypes from "prop-types";
import { SUN, CLOUDY, SNOW, RAIN, FOG } from "../../consants/weather";
import { useState, useEffect } from "react";
import api_weather from "../../consants/weather_api";
import CircularProgress from "@material-ui/core/CircularProgress"
import { transformWeather } from "../../services/transformWeather";

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => {
  return (
    <div onClick={onWeatherLocationClick} className="weatherLocationCont">
      <Location city={city}></Location>
      {
        (data) ? <WeatherData data={data}></WeatherData> : <CircularProgress size={"3em"}></CircularProgress>
      }
      <br></br>
    </div>
  );
};

export default WeatherLocation;

WeatherLocation.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  }),
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
};