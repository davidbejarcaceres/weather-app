import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData"
import PropTypes from 'prop-types';
import { SUN } from "../../consants/weather";

const data = {
     temperature: 5,
     weatherState: SUN,
     humidity: 10,
     wind: "10 m/s"
}

const WeatherLocation = () => (
     <div className="weatherLocationCont">
          <Location city={"Buenos Aires"}></Location>
          <WeatherData data={data}></WeatherData>
     </div>

);

export default WeatherLocation;


WeatherLocation.propTypes = {
     temperature: PropTypes.number,
     weatherState: PropTypes.string

};