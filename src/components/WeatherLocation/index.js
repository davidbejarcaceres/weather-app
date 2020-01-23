import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import PropTypes from "prop-types";
import { SUN, WINDY } from "../../consants/weather";
import { useState } from "react";

const location = "Buenos Aires,ar";
const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const WeatherLocation = () => {
  const data1 = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: "10 m/s"
  };

  const city1 = "Bogota";

  const [city, setCity] = useState(city1);
  const [data, setData] = useState(data1);
  const [isFirst, setIsFirst] = useState(true);

async function handleUpdateClick() {
    let nuevos= await getAPI(api_weather);
    console.log("Updated!");
    setCity(isFirst ? nuevos.city : city1);
    setData(isFirst ? nuevos.new_weather : data1);

    setIsFirst(!isFirst);
  }

   function getData(json) {
     const {humidity, temp} = json.main;
     const speed = json.wind.speed;
     const weatherState = SUN;
     const city = json.name
     
     let nuevosDatos = {
     humidity: humidity,
     temperature: parseInt((temp - 273), 10),
     weatherState: weatherState,
     wind:  `${speed} m/s`
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
    <div className="weatherLocationCont">
      <Location city={city}></Location>
      <WeatherData data={data}></WeatherData>
      <button className="buttonWeatherLocation" onClick={handleUpdateClick}>
        Update
      </button>
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
     })
   };