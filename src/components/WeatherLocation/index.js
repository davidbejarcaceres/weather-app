import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData"
import PropTypes from 'prop-types';
import { SUN, WINDY } from "../../consants/weather";
import { useState } from "react";

const data = {
     temperature: 5,
     weatherState: SUN,
     humidity: 10,
     wind: "10 m/s"
}

const data2 = {
     temperature: 15,
     weatherState: WINDY,
     humidity: 76,
     wind: "20 m/s"
}
const city2 = "Bogotá"




const WeatherLocation = () => {
     const [city, setCity] = useState("Buenos Aires")

     const handleUpdateClick = (props) => {
          console.log("Updated!");
          setCity(city2)                             
      }

     return(
          <div className="weatherLocationCont">
               <Location city={city}></Location>
               <WeatherData data={data}></WeatherData>
               <button className="buttonWeatherLocation" onClick={handleUpdateClick}>Update</button>
          </div>
     )
};

export default WeatherLocation;
