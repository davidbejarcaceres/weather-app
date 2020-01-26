import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import PropTypes from "prop-types";
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
