import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import PropTypes from "prop-types";
import { SUN, WINDY, CLOUDY, SNOW, RAIN, FOG } from "../../consants/weather";
import { useState, useEffect } from "react";
import api_weather from "../../consants/weather_api";
import CircularProgress from "@material-ui/core/CircularProgress"
import Button from '@material-ui/core/Button';

const WeatherLocation = (props) => {

  const [city, setCity] = useState(props.city);
  const [data, setData] = useState();
  // Function listener passed from parent component
  const onWeatherLocationClick = props.onWeatherLocationClick;



  useEffect(() => {
    const fetchData = async () => {
      let nuevos = await getAPI(api_weather(city));
      setData(nuevos.new_weather);
      setCity(nuevos.city);

    };

    fetchData();
  }, []); // Inside of the brackets input the variable as a listener to run the async function again


  async function handleUpdateClick() {
    let nuevos = await getAPI(api_weather(city));
    console.log("Updated!");

  }

  function parseWeatherCondition(weatherCode) {
    let weatherState = SUN;
    if (weatherCode == 800) { // Clear Sunny  
      weatherState = SUN
    } else if (weatherCode > 800) { // CLOUDS
      weatherState = CLOUDY
    } else if (weatherCode >= 600 && weatherCode < 700) { // SNOW
      weatherState = SNOW
    } else if (weatherCode >= 500 && weatherCode < 600) { // RAIN
      weatherState = RAIN
    } else if (weatherCode >= 700 && weatherCode < 800) { // RAIN
      weatherState = FOG
    }
    return weatherState
  }

  function getData(json) {
    const { humidity, temp } = json.main;
    const speed = json.wind.speed;
    const weatherState = parseWeatherCondition(json.weather[0].id);
    const city = json.name



    let nuevosDatos = {
      humidity: humidity,
      temperature: parseInt((temp - 273), 10),
      weatherState: weatherState,
      wind: `${speed} m/s`
    };

    let todos = {
      new_weather: nuevosDatos,
      city: city
    }

    return todos;
  }

  function getAPI(url) {
    return fetch(url)
      .then(res => {
        return res.json();
      })
      .then(jsonResponse => {
        return getData(jsonResponse);
      });
  };


  return (
    <div onClick={onWeatherLocationClick} className="weatherLocationCont">
      <Location city={city}></Location>
      {
        (data) ? <WeatherData data={data}></WeatherData> : <CircularProgress size={"3em"}></CircularProgress>
      }
      <br></br>
      <Button size={"large"} onClick={handleUpdateClick} variant="contained" color="primary">
        update
      </Button>
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