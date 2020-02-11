import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import PropTypes from "prop-types";
import { SUN, CLOUDY, SNOW, RAIN, FOG } from "../../consants/weather";
import { useState, useEffect } from "react";
import api_weather from "../../consants/weather_api";
import CircularProgress from "@material-ui/core/CircularProgress"
import { transformWeather } from "../../services/transformWeather";

const WeatherLocation = (props) => {

  const [city, setCity] = useState(props.city);
  const [data, setData] = useState();
  // Function listener passed from parent component
  const onWeatherLocationClick = props.onWeatherLocationClick;


  useEffect(() => {
    const fetchData = async (props) => {
      let newData = await getAPI(api_weather(city));
      setData(newData);
      setCity(city);
    };

    fetchData();
  }, [props.city]); // Inside of the brackets input the variable as a listener to run the async function again


  function getAPI(url) {
    return fetch(url)
      .then(res => {
        return res.json();
      })
      .then(jsonResponse => {
        return transformWeather(jsonResponse);
      });
  };


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