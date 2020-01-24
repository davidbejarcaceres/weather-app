import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from "./WeatherLocation/index"
import { useState, useEffect  } from "react";
import "./styles.css";


const strToComponents = (cities) =>  (
    cities.map( (city, index) =>  <WeatherLocation key={index}  city={city} />)
)


const LocationList = (props) =>  (
    <div className="locationList">
        {strToComponents(props.cities)}
    </div>
)




LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;