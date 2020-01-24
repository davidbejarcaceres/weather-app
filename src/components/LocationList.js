import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from "./WeatherLocation/index"
import { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import "./styles.css";

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import CachedIcon from '@material-ui/icons/Cached';


const onWeatherLocationClick = () => {
    console.log("Clicked!");

}

const onHandleLocationClick = (city) => {
    console.log("onHandleLocationClick");

}

const strToComponents = (cities) => (
    cities.map((city, index) => <WeatherLocation onWeatherLocationClick={() => onHandleLocationClick(city)} key={index} city={city} />)
)


const LocationList = (props) => (
    <div className="locationList">
        <div className="butonActualiza">
            <Fab color="primary" size={"large"} variant="extended">
                <CachedIcon className={"icon-btn"} />
                Update
            </Fab>
        </div>


        <br></br>


        {strToComponents(props.cities)}
    </div>
)




LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;