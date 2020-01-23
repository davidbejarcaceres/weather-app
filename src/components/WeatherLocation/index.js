import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData"
import PropTypes from 'prop-types';


const WeatherLocation = () => (

     <div className="weatherLocationCont">
          <Location city={"Buenos Aires"}></Location>
          <WeatherData></WeatherData>
     </div>

);

export default WeatherLocation;


WeatherLocation.propTypes = {
     temperature: PropTypes.number,
     weatherState: PropTypes.string

};