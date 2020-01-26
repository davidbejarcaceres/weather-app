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


const onHandleLocationClick = (city, onSelectedListener, index) => {
    onSelectedListener(city, index)
}

const strToComponents = (cities, onSelectedListener) => (
    // cities.map((city, index) => <WeatherLocation onClick={onHandleLocationClick}  key={index} city={city} />)
    cities.map((city, index) => <WeatherLocation onWeatherLocationClick={ () => {onHandleLocationClick(city, onSelectedListener, index)} }  key={index} city={city} />)
)


const LocationList = (props) => {

    const onSelectedListener = props.onSelectedLocation;    
    const [cities, setCities] = useState(props.cities)
    
    return (
    <div className="locationList">
        <div className="butonActualiza">
            <Fab color="primary" size={"large"} variant="extended">
                <CachedIcon className={"icon-btn"} />
                Update
            </Fab>
        </div>


        <br></br>

        {strToComponents(props.cities, onSelectedListener)}
    </div>
    );
}




LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedListener: PropTypes.func,
};

export default LocationList;