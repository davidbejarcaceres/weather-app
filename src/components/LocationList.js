import React from 'react';
// import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import WeatherLocation from "./WeatherLocation/index"
import "./styles.css";

import Fab from '@material-ui/core/Fab';
import CachedIcon from '@material-ui/icons/Cached';
import AddIcon from '@material-ui/icons/Add';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        '& label.Mui-focused': {
            color: 'red',
        },


        '& > *': {
            margin: theme.spacing(1),
            backgroundColor: "#535a6b",
            color: "white"
        },
    },
    input: {
        color: "white"
    }
}));


const onHandleLocationClick = (city, onSelectedListener, index) => {
    onSelectedListener(city, index)
}



let newCity = null

const LocationList = (props) => {
    const classes = useStyles();
    const cities = props.cities
    const onSelectedListener = props.onSelectedLocation;
    const onUpdateClick = props.onUpdateClickHandle;
    const addCiudad = props.onAddCity;

    const handleChange = (event) => {
        newCity = event.target.value;
    }

    const strToComponents = (ciudades, onSelectedListener) => (
        ciudades.map((city, index) => <WeatherLocation
            onWeatherLocationClick={() => { onHandleLocationClick(city.name, onSelectedListener, index) }}
            city={city.name} 
            data={city.data}
            key={city.key}  />)
    )

    // useEffect(() => {
    //     const actualizaLista = () => {
    //         console.log("Actializa Lista");
    //         setCities(props.cities)
    //     }

    //     actualizaLista();
    // }, [props.cities])

    return (
        <div className="locationList">
            <div className="butonActualiza">
                <Fab onClick={onUpdateClick} color="primary" size={"large"} variant="extended">
                    <CachedIcon className={"icon-btn"} />
                    Update
            </Fab>
            </div>
            <br></br>


            <form className={classes.root} noValidate autoComplete="off">
                <TextField type="search" onFocus={(event) => console.log()} onChange={handleChange} color="primary" id="outlined-basic" label="Add a new city" variant="outlined" />
                <Fab onClick={() => { addCiudad(newCity) }} color="primary" size={"small"} aria-label="add">
                    <AddIcon className={"icon-btn-add"} />
                </Fab>
            </form>

            <br></br>
            {cities ? strToComponents(cities, onSelectedListener) : null}
            
        </div>
    );
}




LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedListener: PropTypes.func,
    onAddCity: PropTypes.func.isRequired,
};

export default LocationList;